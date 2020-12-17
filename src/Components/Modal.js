import { Component } from "react";

export default class Modal extends Component {
  state = {
    isOpen: this.props.isOpen,
  };
  toggleIsOpen = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <span>
        <span onClick={this.toggleIsOpen}>{this.props.button}</span>
        <div
          className={"modal fade " + (this.state.isOpen ? "show" : "")}
          onClick={this.toggleIsOpen}
          style={this.state.isOpen ? { display: "block" } : { display: "none" }}
        >
          <div
            className="modal-dialog text-black"
            role="document"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.title}
                </h5>
                <button className="close" onClick={this.toggleIsOpen}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
