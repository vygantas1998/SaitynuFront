import { Component } from "react";
import Message from "../../Components/Message";
import Form from "../../Components/Form/Form";
import { withRouter } from "react-router-dom";
import { getData, getErrors, patchData } from "../../helpers";
import { apiUrl } from "../../config";

class UpdatePage extends Component {
  state = {
    error: "",
    fieldErrors: {},
    data: {},
  };
  onSubmit = (data) => {
    patchData(
      apiUrl + "/" + this.props.pageName + "/" + this.props.match.params.id,
      data
    ).then((res) => {
      if (res.error && res.error.details) {
        this.setState({
          ...this.state,
          fieldErrors: getErrors(res.error.details),
        });
      } else if (res.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else {
        this.goBack();
      }
    });
  };
  loadData = () => {
    getData(
      apiUrl + "/" + this.props.pageName + "/" + this.props.match.params.id
    ).then((res) => {
      if (res.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else {
        this.setState({ ...this.state, data: res });
      }
    });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    if (Object.keys(this.state.data).length === 0) {
      this.loadData();
    }
    return (
      <div className="masthead">
        <div className="container text-center align-center pt-5 col-md-3">
          <br />
          {this.state.error ? (
            <Message type="danger" message={this.state.error} />
          ) : (
            ""
          )}
          <div className="card bg-dark">
            <div className="card-body text-white">
              <div className="text-left">
                <button className="btn btn-light p-2" onClick={this.goBack}>
                  Go back
                </button>
              </div>
              <h2>Edit {this.props.title}</h2>
              <Form
                fields={this.props.fields}
                buttonLabel="Submit"
                onSubmit={this.onSubmit}
                errors={this.state.fieldErrors}
                values={this.state.data}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(UpdatePage);
