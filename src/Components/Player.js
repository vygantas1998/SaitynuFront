import { Component } from "react";
import { withRouter } from "react-router-dom";
import { apiUrl } from "../config";
import { getData } from "../helpers";
import Modal from "./Modal";

class Player extends Component {
  state = {
    playerStats: [],
  };
  componentDidMount() {
    getData(apiUrl + "/players/" + this.props.id + "/player-stats").then(
      (res) => {
        if (res.error) {
        } else {
          this.setState({ ...this.state, playerStats: res });
        }
      }
    );
  }
  onAdd = () => {
    this.props.history.push(
      "/players/" + this.props.id + "/player-stats/create"
    );
  };
  onStatEdit = (id) => {
    this.props.history.push("/player-stats/edit/" + id);
  };
  getHeader = () => {
    let td = [];
    let i = 0;
    this.state.playerStats.forEach((e) => {
      td.push(<th key={i}>{e.title}</th>);
      i++;
    });
    if (this.props.isAdmin) {
      td.push(
        <th key={i++} className="text-right">
          <span className="mr-2" onClick={this.onAdd}>
            <i
              className="fa fa-plus text-primary"
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </th>
      );
    }
    return td;
  };
  getTd = () => {
    let td = [];
    let i = 0;
    this.state.playerStats.forEach((e) => {
      td.push(
        <td key={i}>
          {e.value}
          {this.props.isAdmin ? (
            <span>
              <span className="mr-2" onClick={() => this.onStatEdit(e.id)}>
                <i
                  className="fa fa-edit text-warning ml-2"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
              <Modal
                title="Are you sure you want to remove this item?"
                button={
                  <span>
                    <i
                      className="fa fa-times text-danger"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                }
              >
                <button
                  className="btn btn-danger mr-2 p-3"
                  onClick={() => this.props.onStatDelete(e.id)}
                >
                  Yes
                </button>
              </Modal>
            </span>
          ) : (
            ""
          )}
        </td>
      );
      i++;
    });
    if (this.props.isAdmin) {
      td.push(<td key={i++}></td>);
    }
    return td;
  };
  render() {
    return (
      <div className="mb-2 col-md-6">
        <div style={{ height: "40px" }} className="row">
          <div className="col-6">
            <img
              alt="avatar"
              className="rounded mr-2"
              width="40"
              src={this.props.pictureURL}
            />
            {this.props.nickName}
          </div>
          {this.props.isAdmin ? (
            <div className="text-right col-6">
              <span
                className="mr-2"
                onClick={() => this.props.onEdit(this.props.id)}
              >
                <i
                  className="fa fa-edit text-warning"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
              <Modal
                title="Are you sure you want to remove this item?"
                button={
                  <span>
                    <i
                      className="fa fa-times text-danger"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                }
              >
                <button
                  className="btn btn-danger mr-2 p-3"
                  onClick={() => this.props.onDelete(this.props.id)}
                >
                  Yes
                </button>
              </Modal>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <table className="table table-dark">
              <tbody>
                <tr>{this.getHeader()}</tr>
                <tr>{this.getTd()}</tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default withRouter(Player);
