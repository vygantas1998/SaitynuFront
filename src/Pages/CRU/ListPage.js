import { Component } from "react";
import List from "../../Components/List/List";
import { deleteData, getData } from "../../helpers";
import { apiUrl } from "../../config";
import { withRouter } from "react-router-dom";
import Message from "../../Components/Message";

class ListPage extends Component {
  state = {
    data: [],
  };
  getMatchesData = async () => {
    let data = await getData(apiUrl + "/" + this.props.pageName);
    return data;
  };
  onDetails = (id) => {
    this.props.history.push("/" + this.props.pageName + "/" + id);
  };
  onEdit = (id) => {
    this.props.history.push("/" + this.props.pageName + "/edit/" + id);
  };
  onDelete = (id) => {
    deleteData(apiUrl + "/" + this.props.pageName + "/" + id);
    this.forceUpdate();
  };
  onAddNew = () => {
    this.props.history.push("/" + this.props.pageName + "/create");
  };
  componentDidUpdate() {
    let newData = this.getMatchesData();
    newData.then((res) => {
      if (res.error && res.error.message !== this.state.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else if (res.length !== this.state.data.length) {
        this.setState({ ...this.state, data: res });
      }
    });
  }
  componentDidMount() {
    let newData = this.getMatchesData();
    newData.then((res) => {
      if (res.error && res.error.message !== this.state.error) {
        this.setState({ ...this.state, error: res.error.message });
      } else {
        this.setState({ ...this.state, data: res });
      }
    });
  }
  render() {
    return (
      <div className="masthead">
        <div className="container text-center align-center pt-5">
          <br />
          {this.state.error ? (
            <Message type="danger" message={this.state.error} />
          ) : (
            <div className="card bg-dark">
              <div>
                {this.props.controls ? (
                  <button
                    onClick={this.onAddNew}
                    className="btn btn-primary float-right p-3 m-3"
                  >
                    Add new
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="card-body text-center table-responsive pt-0">
                <List
                  onDetails={this.onDetails}
                  onEdit={this.onEdit}
                  onRemove={this.onDelete}
                  columns={this.props.columns}
                  data={this.state.data}
                  controls={this.props.controls}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(ListPage);
