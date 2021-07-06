import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylehomepage.css";
import Login from './Login';
import Signup from './Signup';

export default class HomePage extends Component {
  render() {
      return(
        <div>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div>
            <img className="img1"alt = "img-rand" src="https://elearningindustry.com/wp-content/uploads/2020/02/how-to-create-an-online-language-learning-platform.jpg" />
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
              <Link style={{fontSize: "50px", color: "black"}} className="navbar-brand" to={"/login"}> SkillUp </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a style={{color:"black"}}className="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-user"
                      aria-hidden="true"></i> About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link style={{color:"black"}} className="nav-link" to={"/login"}> Sign in</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{color:"black"}} className="nav-link" to={"/signup"}> Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="outer">
              <div className="inner">
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                </Switch>
              </div>
            </div>
          <div className="head">
            <h1><i>Discover a new way of learning...</i></h1>
          </div>
          <div className="description">
            <p><i>The main objective of the E-Learning is to help the students get over the traditional methods of learning and make them accustomed to the internet where the notes for their respective subjects are easily available</i></p>
          </div>
        </div>
       
      );
  }
}

