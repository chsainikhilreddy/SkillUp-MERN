import React from "react";
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from "react-router-dom";

// import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';


function App() {
  // const [data1, setData1] = React.useState(null);
  // fetch('http://localhost:5000')
  // .then(res => res.json())
  // .then(data => setData1(data));
  return (
    <Router>
      <Switch>
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
