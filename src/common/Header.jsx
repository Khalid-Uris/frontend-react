import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profile from "../components/Profile";

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/forget" Component={Forget} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Header;
