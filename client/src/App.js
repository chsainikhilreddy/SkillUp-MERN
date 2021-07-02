import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, /*Redirect, Link*/ } from "react-router-dom";
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

// import Login from './components/Login';
// import Signup from './components/Signup';


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
  // const [data1, setData1] = React.useState(null);
  // fetch('http://localhost:5000')
  // .then(res => res.json())
  // .then(data => setData1(data));

  // checkForToken = (Component) => () => {
  //   const user_auth_token = localStorage.getItem("user_auth_token");
  //   return user_auth_token ? (
  //     <Component user_name={user_auth_token} />
  //   ) : (
  //     <Redirect to="/login" />
  //   );
  // };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={["/", "/login", "/signup"]} component={HomePage} />

          <Route path="/dash" component={Dashboard} />

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
            
            {/* <MyCourse/> */}
          </Route>
          <Route exact path={["/quiz"]} component={Quiz} />
          
        </Switch>
      </Router>
    );
  }
}

export default App;
