import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forget extends Component {
  state = {
    email: "",
    message: "",
  };

  // Forget Form Submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post("/forgetpassword", data)
      .then((response) => {
        this.setState({ message: response.data.message });
        this.getElementById("forgetform").reset();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    let error = "";

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
            <h3 className="text-center">Forget Password</h3>

            <form onSubmit={this.formSubmit} id="forgetform">
              {error}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
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
