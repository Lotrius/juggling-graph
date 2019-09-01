import React, { Component } from 'react';
import DailyChart from '../Components/DailyChart';
import DailyAverageChart from '../Components/DailyAverageChart';

const dailyData = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
];

const dailyAverageData = [
  { x: 0, y: 0 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyData: dailyData,
      dailyAverageData: dailyAverageData
    }
  }

  render() {
    // Padding for the graphs cause otherwise the labels overlap
    // the numbers and it looks like hot garbage
    const xPadding = 30;
    const yPadding = 40;

    return (
      <div>
        {/* Daily catches graph */}
        <DailyChart dailyData={dailyData} updateDailyData={this.updateDailyData} xPadding={xPadding} yPadding={yPadding} />

        {/* Daily average catches graph */}
        <DailyAverageChart dailyAverageData={dailyAverageData} xPadding={xPadding} yPadding={yPadding}/>
      </div>

    );
  }

  updateDailyData = (num) => {
    dailyData.push({ x: dailyData.length, y: num }); // Push new data onto data array
    this.setState({ dailyData }); // Update state
    this.updateAverageData(dailyData); // Update average data
  }

  updateAverageData = (data) => {
    const catchValues = dailyData.map(dat => dat.y); // Get array of catches in a day
    const newAverage = catchValues.reduce((a, b) => a + b, 0) / (dailyData.length - 1); // Get average
    dailyAverageData.push({ x: dailyAverageData.length, y: newAverage }); // Push average onto data array
    this.setState({ dailyAverageData }); // Update state
  }
}

export default App;
