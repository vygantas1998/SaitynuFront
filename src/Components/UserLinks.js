import { Link } from "react-router-dom";
import { Component } from "react";

export default class UserLinks extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link js-scroll-trigger">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/matches" className="nav-link js-scroll-trigger">
            Matches
          </Link>
        </li>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link js-scroll-trigger btn-link"
          >
            Logout
          </button>
        </li>
      </ul>
    );
  }
}
