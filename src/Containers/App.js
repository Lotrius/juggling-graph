import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Cookie from 'js-cookie';
import loadable from '@loadable/component';

// Code splitting
const SignIn = loadable(() => import('../Components/SignIn/SignIn'));
const DailyChart = loadable(() =>
  import('../Components/Charts/DailyChart/DailyChart')
);
const DailyAverageChart = loadable(() =>
  import('../Components/Charts/DailyAverageChart/DailyAverageChart')
);
const Nav = loadable(() => import('../Components/Nav/Nav'));

class App extends Component {
  /**
   * Flip login status
   *
   * @param {String} status whether the login is as a registered user, guest, or sandbox
   */
  changeLoginStatus = (status) => {
    const guest = status === 'guest';
    const sandbox = status === 'sandbox';

    // If not signed in, or was never signed in to begin with and are now logging in,
    if (Cookie.get('signedin') === 'false' || !Cookie.get('signedin')) {
      // If guest, set guest as true
      if (guest) {
        localStorage.setItem('guest', true);
      }
      if (sandbox) {
        localStorage.setItem('sandbox', true);
      }

      // Signed in cookie true
      Cookie.set('signedin', true, { expires: 1 });
    }

    // If already signed in and logging out,
    else if (Cookie.get('signedin') === 'true') {
      // If a guest, set guest status to false
      if (localStorage.getItem('guest') === 'true') {
        localStorage.setItem('guest', false);
      }

      if (localStorage.getItem('sandbox') === 'true') {
        localStorage.setItem('sandbox', false);
      }

      // Change path to '/' so when signed in again,
      // will start at daily catches chart
      localStorage.setItem('path', '/');

      // Set signed in to false
      Cookie.set('signedin', false, { expires: 1 });
    }
    window.location.reload(true); // Reload page
  };

  /**
   * Update current path
   *
   * @param {String} path the current path of the app
   */
  changeCurrentPath = (path) => {
    localStorage.setItem('path', path);
  };

  /**
   * Render app
   */
  render() {
    // Set session dates
    sessionStorage.setItem('date', new Date());
    sessionStorage.setItem('avgdate', new Date());

    // Padding for the graphs cause otherwise the labels overlap
    // the numbers and it looks like hot garbage
    const xPadding = 30;
    const yPadding = 35;

    const path = localStorage.getItem('path'); // Current path

    // If there's a cookie or if signed out, go to login page
    if (Cookie.get('signedin') === 'false' || !Cookie.get('signedin')) {
      return (
        <Router basename="/juggling-graph">
          {/* Redirect to sign in page */}
          <Redirect to="/signin" />

          <Route
            exact
            render={() => <SignIn changeLoginStatus={this.changeLoginStatus} />}
            path="/signin"
          />
        </Router>
      );
    }

    // Else go to main page
    return (
      <div className="container-fluid">
        <Router basename="/juggling-graph">
          {/* Redirect to main page */}
          <Redirect to={path || '/'} />

          <Nav changeLoginStatus={this.changeLoginStatus} />

          <Switch>
            {/* Daily catches graph */}
            <Route
              exact
              render={() => (
                <DailyChart
                  xPadding={xPadding}
                  yPadding={yPadding}
                  changeCurrentPath={this.changeCurrentPath}
                />
              )}
              path="/"
            />

            {/* Daily average catches graph */}
            <Route
              exact
              render={() => (
                <DailyAverageChart
                  xPadding={xPadding}
                  yPadding={yPadding}
                  changeCurrentPath={this.changeCurrentPath}
                />
              )}
              path="/average"
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
