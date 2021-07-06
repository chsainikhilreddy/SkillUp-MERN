import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, /*Redirect, Link*/ } from "react-router-dom";
import HomePage from './components/HomePage';

import Header from './Header';
import Profile from './profile/Profile';
import AboutUs from './aboutUs/AboutUs';
import MainPage from './home/MainPage';
import Available from './availableCourses/AvailableCourses';
import MyCourseJava from './myCourse/MyCourseJava';
import MyCoursePython from './myCourse/MyCoursePython';
import MyCourseCPP from './myCourse/MyCourseCPP';
import Accomplishments from './accomplishments/Accomplishments';
import Quiz from './quiz/Quiz1';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={["/", "/login", "/signup"]} component={HomePage} />


           <Route exact path={["/profile", "/aboutus", "/MainPage", "/AvailableCourses", "/MyCourseJava", "/MyCoursePython", "/MyCourseCPP", "/Accomplishments"]} >
            <Header />
            <Route path='/profile' component={Profile} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/AvailableCourses' component={Available} />
            <Route path='/MyCourseJava' component={MyCourseJava} />
            <Route path='/MyCoursePython' component={MyCoursePython} />
            <Route path='/MyCourseCPP' component={MyCourseCPP} />
            <Route path='/Accomplishments' component={Accomplishments} />
          </Route>
          <Route exact path={["/quiz"]} component={Quiz} />
          
        </Switch>
      </Router>
    );
  }
}

export default App;
