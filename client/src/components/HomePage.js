import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylehomepage.css";
import Login from './Login';
import Signup from './Signup';

export default class HomePage extends Component {
  render() {
      return(
        //<Router>
        
        <div>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className= "img1">
            <img className="img1" alt = "img-rand" src="https://elearningindustry.com/wp-content/uploads/2020/02/how-to-create-an-online-language-learning-platform.jpg" />
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
          {/* </div> */}
        

          <div className="head">
            <h1><i>Discover a new way of learning...</i></h1>
          </div>
          <div className="description">
            <p><i>The main objective of the E-Learning is to help the students get over the traditional methods of learning and make them accustomed to the internet where the notes for their respective subjects are easily available</i></p>
          </div>
        </div>


   // <hr />
  // <div className="card text-white bg-primary mb-3 card-deck m-3" style={{maxWidth: "18rem"}}>

  //     <div className="card-body">
  //         <h5 className="card-title">Earn a degree</h5>
  //         <hr />
  //         <p className="card-text">From the world's leading universities in business, computer science, and more.</p>
  // </div>
  // </div>
  // <div className="card text-white bg-secondary mb-3 card-deck m-3" style={{maxWidth: "28rem"}}>

  //     <div className="card-body">
  //         <h5 className="card-title">Upskill your organization</h5>
  //         <hr />
  //         <p className="card-text">With on-demand training and development programs.</p>
  //     </div>
  // </div>
  // <div className="card text-white bg-success mb-3 card-deck m-3 " style={{maxWidth: "18rem"}}>

  //     <div className="card-body">
  //         <h5 className="card-title">Gain expertise in the latest skills</h5>
  //         <hr />
  //         <p className="card-text">
  //             With courses and Specializations in computer science, humanities, and more.</p>
  //     </div>
  // </div>
  // <div className="card text-white bg-dark mb-3 card-deck m-3 " style={{maxWidth: "18rem"}}>

  //     <div className="card-body">
  //         <h5 className="card-title">Learn job-ready career skills</h5>
  //         <hr />
  //         <p className="card-text">In artificial intelligence, machine learning, data science, cloud engineering, and more.
  //         </p>
  //     </div>
  // </div>
  // <div className="collapse" id="collapseExample">
  //     <div className="card card-body m-5">
  //         <b>Quality</b>
  //         <p>"People who love to eat are always the best people." "To eat is a necessity, but to eat intelligently is an art." "We all eat, an it would be a sad waste of opportunity to eat badly." "If you really want to make a friend, go to someone's house
  //             and eat with him...the people who give you their food give you their heart.</p>
  //         <hr />
  //         <b>Hygenic</b>
  //         <p>"Ya know what I do almost every day? I wash. Personal hygiene is part of the package with me."</p>
  //         <hr />
  //         <b>Fast Delivery</b>
  //         <p>Delivering happiness and needs</p>
  //     </div>
  // </div>
      //  </Router>
       
      );
  }
}

