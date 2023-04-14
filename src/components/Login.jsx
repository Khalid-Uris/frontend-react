import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  //   message = [];

  // Login Form Submit
  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(data.email);
    axios
      .post("/login", data)
      .then((response) => {
        console.log("hello");
        console.log(localStorage.setItem("token", response.data.data.token));
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.data.user);
      })
      .catch((error) => {
        // console.log(error.response.data.data.error);

        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    // After login redirect to profile

    if (this.state.loggedIn) {
      console.log("In Navigate");
      return <Navigate replace to={"/profile"} />;
    }

    let error = "";
    console.log("In render");
    console.log(this.state.message);
    if (this.state.message) {
      error = (
        <div className="alert alert-danger" role="alert">
          <div>{this.state.message}</div>
        </div>
      );
    }

    return (
      <div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Login Account</h3>
            <form onSubmit={this.formSubmit}>
              {error}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <br />
              <br />
              <br />
              Forget My Password <Link to={"/forget"}>Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
