import { Component } from "react";
import { compareObjects } from "../../helpers";
import Input from "../Input";

export default class Form extends Component {
  state = {};
  handleChange = (event, inputName, isNumber) => {
    this.setState({
      ...this.state,
      [inputName]: isNumber ? parseInt(event.target.value) : event.target.value,
    });
  };
  getFields = () => {
    let fields = [];
    let i = 0;
    this.props.fields.forEach((e) => {
      fields.push(
        <Input
          key={i}
          value={this.state[e.varName]}
          onChange={(el) =>
            this.handleChange(el, e.varName, e.type === "number")
          }
          placeholder={e.placeholder}
          type={e.type}
          error={this.props.errors[e.varName]}
        />
      );
      i++;
    });
    return fields;
  };
  onSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.values && !compareObjects(prevProps.values, this.props.values)) {
      this.setState({ ...this.state, ...this.props.values });
    }
  }
  render() {
    return (
      <div>
        {this.getFields()}
        <div className="float-right">
          <button onClick={this.onSubmit} className="btn btn-primary p-3 mt-2">
            {this.props.buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}
