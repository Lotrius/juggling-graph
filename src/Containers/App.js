import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Cookie from 'js-cookie';
import loadable from '@loadable/component';

const SignIn = loadable(() => import('../Components/SignIn'));
const DailyChart = loadable(() => import('../Components/DailyChart'));
const DailyAverageChart = loadable(() => import('../Components/DailyAverageChart'));
const Nav = loadable(() => import('../Components/Nav'));

class App extends Component {
  render() {
    // Padding for the graphs cause otherwise the labels overlap
    // the numbers and it looks like hot garbage
    const xPadding = 30;
    const yPadding = 40;

    let path = localStorage.getItem('path'); // Current path

    // If there's a cookie or if signed out, go to login page
    if (Cookie.get("signedin") === "false" || !Cookie.get("signedin")) {
      return (
        <Router basename='/juggling-graph'>

          <Redirect to='/signin' />

          <Route exact render={() => <SignIn changeLoginStatus={this.changeLoginStatus} />} path='/signin' />

        </Router>
      );
    }

    // Else go to main page
    else if (Cookie.get("signedin") === "true") {
      return (
        <Router basename='/juggling-graph'>

          <Redirect to={path ? path : '/'} />

          <Nav changeLoginStatus={this.changeLoginStatus} />

          <Switch>
            {/* Daily catches graph */}
            <Route exact render={() => <DailyChart xPadding={xPadding} yPadding={yPadding} changeCurrentPath={this.changeCurrentPath} />} path='/' />

            {/* Daily average catches graph */}
            <Route exact render={() => <DailyAverageChart xPadding={xPadding} yPadding={yPadding} changeCurrentPath={this.changeCurrentPath} />} />} path='/average' />

          </Switch>

        </Router>
      )
    }
  }

  // Flip login status
  changeLoginStatus = () => {
    if (Cookie.get("signedin") === "false" || !Cookie.get("signedin")) {
      Cookie.set("signedin", true);
    } else if (Cookie.get("signedin") === "true") {
      Cookie.set("signedin", false);
    }

    this.forceUpdate(); // Force the app to rerender
  }

  // Update current path
  changeCurrentPath = (path) => {
    localStorage.setItem('path', path);
  }
}

export default App;
