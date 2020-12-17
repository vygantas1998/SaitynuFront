import { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div className={"alert alert-" + this.props.type} role="alert">
        {this.props.message}
      </div>
    );
  }
}
