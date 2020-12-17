import { Link } from "react-router-dom";

function GuestLinks() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link js-scroll-trigger">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link js-scroll-trigger">
          Login
        </Link>
      </li>
    </ul>
  );
}

export default GuestLinks;
