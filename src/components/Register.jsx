import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    c_password: "",
    message: "",
  };

  // Register Form Submit
  formSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      c_password: this.state.c_password,
    };
    console.log(data);
    axios
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    // After Login Redirect to Profile
    if (this.state.loggedIn) {
      return <Navigate replace to={"/profile"} />;
    }
    return (
      <div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Register Account</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
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
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  name="c_password"
                  className="form-control"
                  required
                  onChange={(e) => {
                    this.setState({ c_password: e.target.value });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
              <br />
              <br />
              <br />
              Have an Account? <Link to={"/login"}>Login Here</Link>
              <br />
              Forget My Password <Link to={"/forget"}>Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
