import { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          className={"form-control mt-2 " + (this.props.error ? " is-invalid" : "")}
          placeholder={this.props.placeholder}
        />
        {this.props.error ? (
          <div className="invalid-feedback">{this.props.error}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
