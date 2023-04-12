import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};

  render() {
    return (
      <div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Register Account</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" />
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
