import React, { Component } from "react";
// import "../App.css";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
import Signup from './Signup';

export default class HomePage extends Component {
    render() {
        return(
          <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/login"}> Skillup </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-user"
                      aria-hidden="true"></i> About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}> Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}> Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </div>
          </div>
        </div>
        );
    }
}

