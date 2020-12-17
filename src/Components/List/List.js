import { Component } from "react";
import ListItem from "./ListItem";
import { putOnArray } from "../../helpers";

export default class List extends Component {
  state = {};
  getRows = () => {
    let rows = [];
    let i = 0;
    if (this.props.data) {
      if (this.props.data.length > 0) {
        rows.push(
          <ListItem
            key={i++}
            header={true}
            data={Object.values(this.props.columns)}
            controls={this.props.controls}
          />
        );
      }
      this.props.data.forEach((e) => {
        let dat = putOnArray(this.props.columns, e);
        rows.push(
          <ListItem
            key={i++}
            onDetails={() => this.props.onDetails(e.id)}
            onEdit={() => this.props.onEdit(e.id)}
            onRemove={() => this.props.onRemove(e.id)}
            controls={this.props.controls}
            data={dat}
          />
        );
      });
    }
    return rows;
  };
  render() {
    return (
      <table className="table table-dark">
        <tbody>{this.getRows()}</tbody>
      </table>
    );
  }
}
