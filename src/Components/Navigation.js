import { Component } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../helpers";
import GuestLinks from "./GuestLinks";
import UserLinks from "./UserLinks";

export default class Navigation extends Component {
  state = {
    menuExtended: false,
  };
  toggleMenu = () => {
    this.setState({ ...this.state, menuExtended: !this.state.menuExtended });
  };
  
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand js-scroll-trigger">
            Player DB
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            aria-label="Toggle navigation"
            onClick={this.toggleMenu}
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={
              "collapse navbar-collapse" +
              (this.state.menuExtended ? " show" : "")
            }
          >
              {getCookie("token") ? (
                <UserLinks logout={this.props.logout}/>
              ) : (
                <GuestLinks/>
              )}
          </div>
        </div>
      </nav>
    );
  }
}
