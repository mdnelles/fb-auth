import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// AppWrapper protects Admin Panel from non sessioned access
import { AppWrapper } from "./AppWrapper";
import { Login } from "./components/Login";

class App extends Component {
   render() {
      return (
         <div>
            <Router>
               <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/" component={AppWrapper} />
               </Switch>
            </Router>
         </div>
      );
   }
}

export default App;
