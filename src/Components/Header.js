import { Link } from "react-router-dom";
import { getCookie } from "../helpers";

function Header() {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">PLAYER DB</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Information about players system
          </h2>
          {getCookie("token") ? (
            ""
          ) : (
            <Link className="btn btn-primary js-scroll-trigger" to="/login">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
