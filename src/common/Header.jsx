import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";
import axios from "axios";

class Header extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    // Login User Credentials
    axios
      .get("/user")
      .then((response) => {
        console.log("In header Page");
        console.log(response.data.name);
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    // console.log(this.state.user);
    return (
      <Router>
        <div>
          <Nav user={this.state.user} setUser={this.setUser} />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/forget" Component={Forget} />
            <Route
              path="/profile"
              element={<Profile user={this.state.user} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Header;
