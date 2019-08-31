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
    return (
      <div>
        <DailyChart dailyData={dailyData} updateDailyData={this.updateDailyData} />
        <DailyAverageChart dailyAverageData={dailyAverageData} />
      </div>

    );
  }

  updateDailyData = (num) => {
    dailyData.push({ x: dailyData.length, y: num });
    this.setState({ dailyData });
    this.updateAverageData(dailyData);
  }

  updateAverageData = (data) => {
    const catchValues = dailyData.map(dat => dat.y);
    const newAverage = catchValues.reduce((a, b) => a + b, 0) / dailyData.length;
    dailyAverageData.push({ x: dailyAverageData.length, y: newAverage });
    console.log(dailyAverageData);
    this.setState({ dailyAverageData });
  }
}

export default App;
