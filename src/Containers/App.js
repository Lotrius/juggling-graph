import React, { Component, Suspense } from 'react';
import DailyChart from '../Components/DailyChart';
import DailyAverageChart from '../Components/DailyAverageChart';

import Nav from '../Components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let dailyData = [];

let dailyAverageData = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyData: dailyData,
      dailyAverageData: dailyAverageData,
      date: new Date(),
    }
  }

  componentDidMount() {
    this.setDate(this.state.date);
    this.updateAverageData();
  }

  render() {
    // Padding for the graphs cause otherwise the labels overlap
    // the numbers and it looks like hot garbage
    const xPadding = 30;
    const yPadding = 40;

    dailyData = this.state.dailyData;
    dailyAverageData = this.state.dailyAverageData;

    return (
      <Router>
        <Nav></Nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* Daily catches graph */}
            <Route exact render={(props) => <DailyChart {...props} setDate={this.setDate} dailyData={dailyData} updateDailyData={this.updateDailyData} xPadding={xPadding} yPadding={yPadding} date={this.state.date} />} path='/' />

            {/* Daily average catches graph */}
            <Route exact render={(props) => <DailyAverageChart {...props} dailyAverageData={dailyAverageData} xPadding={xPadding} yPadding={yPadding} />} path='/average' />
            
            {/* Default */}
            <Route component={Error} path='*' />
          </Switch>
        </Suspense>
      </Router>
    );
  }

  setDate = (date) => {
    // Reformat the date to make it easier to pass into DB/title
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
      month = '0' + month;
    }

    if (day.length === 1) {
      day = '0' + day;
    }

    const fullDate = `${year}-${month}-${day}`;

    // Need to call changeGraph like this so that
    // it has access to the updated state
    this.setState({ date: fullDate }, () => this.changeGraph());
  }

  changeGraph = () => {
    fetch('https://obscure-river-59718.herokuapp.com/dailygraph', {
      method: 'post', // Can't pass in body if it's a GET
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newDate: this.state.date // Pass in the new date
      })
    })
      .then(response => response.json())
      .then(data => {
        // Change the dailyData to reflect the new date
        // TODO: Don't set up initial dailyData like this. Idea: update DB to include a 0 catch every day
        dailyData = [{ x: 0, y: 0 }].concat(data.map((num, index) => ({ x: index + 1, y: parseInt(num.catches) })));
        this.setState({ dailyData });
      });
  }

  updateDailyData = (catches) => {
    fetch('https://obscure-river-59718.herokuapp.com/dailyupdate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        catches: catches
      })
    })
      .then(response => response.json())
      .then((res) => {
        // Update the state
        // I COULD call changeGraph but that would just take too much time tbh
        // TODO: Is there a better way to do this? Combine this function and changeGraph somehow?
        dailyData.push({ x: dailyData.length, y: res.catches })
        this.setState({ dailyData })
      })
      .then(() => this.updateAverageData());
  }

  updateAverageData = () => {
    fetch('https://obscure-river-59718.herokuapp.com/averagegraph')
      .then(response => response.json())
      .then((avgdata) => {
        dailyAverageData = avgdata.map((dat, index) => ({ x: dat.to_char, y: parseFloat(dat.avg) }));
        this.setState({ dailyAverageData });
      })
  }
}

export default App;
