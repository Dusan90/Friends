import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import User from './Pages/User'

export class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={User} />
          {/* treba da bude 404 */}
          <Route path='*' component={Home}/>

        </Switch>
      </Router>
    );
  }
}

export default Routes;
