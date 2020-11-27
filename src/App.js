import React, { Fragment, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// views
import Landing from "./views/Landing";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/login" 
              render={props => <Login {...props} />} />
            <Route exact path="/register"
              render={props => <Register {...props} />} />
            <Route exact path="/landing" 
              render={props => <Landing {...props} />} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
