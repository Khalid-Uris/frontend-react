import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forget extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Password</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Forget Password
              </button>
              <br />
              <br />
              <br />
              Have an Account? <Link to={"/login"}>Login Here</Link>
              <br />
              Don't have Account? <Link to={"/register"}>Register</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;
