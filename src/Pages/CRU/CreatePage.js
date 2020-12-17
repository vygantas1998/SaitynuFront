import { Component } from "react";
import Message from "../../Components/Message";
import Form from "../../Components/Form/Form";
import { withRouter } from "react-router-dom";
import { getErrors, postData } from "../../helpers";
import { apiUrl } from "../../config";

class CreatePage extends Component {
  state = {
    error: "",
    fieldErrors: {},
  };
  onSubmit = (data) => {
    postData(apiUrl + "/"+this.props.pageName, data).then((res) => {
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
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
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
              <h2>Add new {this.props.title}</h2>
              <Form
                fields={this.props.fields}
                buttonLabel="Submit"
                onSubmit={this.onSubmit}
                errors={this.state.fieldErrors}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(CreatePage);
