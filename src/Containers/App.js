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

    let guest = localStorage.getItem('guest'); // Signed in as guest or not

    // If there's a cookie or if signed out, go to login page
    if (Cookie.get("signedin") === "false" || !Cookie.get("signedin")) {
      return (
        <Router basename='/juggling-graph'>

          {/* Redirect to sign in page */}
          <Redirect to='/signin' />

          <Route exact render={() => <SignIn changeLoginStatus={this.changeLoginStatus} />} path='/signin' />

        </Router>
      );
    }

    // Else go to main page
    else if (Cookie.get("signedin") === "true") {
      return (
        <Router basename='/juggling-graph'>

          {/* Redirect to main page */}
          <Redirect to={path ? path : '/'} />

          <Nav changeLoginStatus={this.changeLoginStatus} />

          <Switch>

            {/* Daily catches graph */}
            <Route exact render={() => <DailyChart xPadding={xPadding} yPadding={yPadding} guest={guest} changeCurrentPath={this.changeCurrentPath} />} path='/' />

            {/* Daily average catches graph */}
            <Route exact render={() => <DailyAverageChart xPadding={xPadding} yPadding={yPadding} guest={guest} changeCurrentPath={this.changeCurrentPath} />} path='/average' />

          </Switch>
        </Router>
      )
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Flip login status
  changeLoginStatus = (guest) => {
    //If not signed in, or was never signed in to begin with and are now logging in,
    if (Cookie.get("signedin") === "false" || !Cookie.get("signedin")) {

      // If guest, set guest as true
      if (guest) {
        localStorage.setItem('guest', true);
      }

      // Signed in cookie true
      Cookie.set("signedin", true);
    }

    // If already signed in and logging out,
    else if (Cookie.get("signedin") === "true") {

      // If a guest, set guest status to false
      if (localStorage.getItem('guest') === "true") {
        localStorage.setItem('guest', false);
        sessionStorage.removeItem('avgdate');
        sessionStorage.removeItem('date');
      }

      // Change path to '/' so when signed in again,
      // will start at daily catches chart
      localStorage.setItem('path', '/');

      // Set signed in to false
      Cookie.set("signedin", false);
    }

    this.forceUpdate(); // Force the app to rerender
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Update current path
  changeCurrentPath = (path) => {
    localStorage.setItem('path', path);
  }
}

export default App;
