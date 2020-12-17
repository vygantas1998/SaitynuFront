import { Component } from "react";
import Modal from "../Modal";

export default class ListItem extends Component {
  state = {};
  renderCol = () => {
    let ren = [];
    let i = 0;
    Object.values(this.props.data).forEach((e) => {
      if (this.props.header) {
        ren.push(<th key={i}>{e}</th>);
      } else {
        ren.push(<td key={i}>{e}</td>);
      }
      i++;
    });
    if (this.props.header) {
      ren.push(<th key={i++}></th>);
    } else {
      ren.push(
        <td key={i++}>
          <span onClick={this.props.onDetails}>
            <i
              className="fa fa-eye text-primary"
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </td>
      );
    }
    if (this.props.controls) {
      if (this.props.header) {
        ren.push(<th key={i++}></th>);
        ren.push(<th key={i++}></th>);
      } else {
        ren.push(
          <td key={i++}>
            <span onClick={this.props.onEdit}>
              <i
                className="fa fa-edit text-warning"
                style={{ cursor: "pointer" }}
              ></i>
            </span>
          </td>
        );
        ren.push(
          <td key={i++}>
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
                onClick={this.props.onRemove}
              >
                Yes
              </button>
            </Modal>
          </td>
        );
      }
    }
    return ren;
  };
  render() {
    return <tr>{this.renderCol()}</tr>;
  }
}
