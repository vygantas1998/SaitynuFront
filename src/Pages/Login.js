import { Link, Redirect } from "react-router-dom";
import { Component } from "react";
import { getCookie, getErrors, postData } from "../helpers";
import Message from "../Components/Message";
import Input from "../Components/Input";
import { apiUrl } from "../config";

export default class Navigation extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    error: "",
  };
  handleChange = (event, inputName) => {
    this.setState({ ...this.state, [inputName]: event.target.value });
  };
  handleLogin = () => {
    postData(apiUrl + "/users/login", {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      this.setState({
        ...this.state,
        error: "",
        emailError: "",
        passwordError: "",
      });
      if (res.error) {
        if (res.error.details) {
          let errors = getErrors(res.error.details);
          this.setState({
            ...this.state,
            emailError: errors.email,
            passwordError: errors.password,
          });
        } else {
          this.setState({ ...this.state, error: res.error.message });
        }
      }
      if (res.token) {
        document.cookie = "token=" + res.token;
        this.props.recheckForAdmin();
        this.forceUpdate();
      }
    });
  };
  render() {
    return (
      <div className="masthead">
        {getCookie("token") ? <Redirect to="/" /> : ""}
        <div className="container text-center align-center pt-5">
          {this.state.error ? (
            <Message type="danger" message={this.state.error} />
          ) : (
            ""
          )}
          <div className="card bg-dark col-md-4 h-50 m-auto align-center">
            <div className="card-body text-center">
              <h3 className="card-title text-center text-white">Login</h3>
              <Input
                value={this.state.email}
                onChange={(e) => this.handleChange(e, "email")}
                placeholder="Email"
                type="text"
                error={this.state.emailError}
              />
              <Input
                value={this.state.password}
                onChange={(e) => this.handleChange(e, "password")}
                placeholder="Password"
                type="password"
                error={this.state.passwordError}
              />
              <button
                className="btn btn-primary mt-3 mb-3"
                onClick={this.handleLogin}
              >
                Login
              </button>
              <div className="text-center">
                <Link
                  to="/"
                  className="navbar-brand js-scroll-trigger text-white"
                >
                  Back to website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
