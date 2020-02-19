import React, { Component } from 'react';
import {
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryLabel,
  VictoryTooltip
} from 'victory';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import DateSelect from '../DateSelect';
import DataEntryField from '../DataEntryField';
import './Chart.css';

class DailyChart extends Component {
  constructor() {
    super();
    this.state = {
      dailyData: []
    };
  }

  /* ////////////////////////////////////////////////////////////////////////// */

  // Update storage and get data when app opened
  componentDidMount() {
    const { changeCurrentPath, location } = this.props;

    if (sessionStorage.getItem('date')) {
      this.setDate(new Date(sessionStorage.getItem('date')));
    }

    changeCurrentPath(location.pathname);
  }

  /* ////////////////////////////////////////////////////////////////////////// */

  // Returns the styles for the graph
  getStyles = (xPadding, yPadding) => {
    return {
      xAxis: {
        axisLabel: { padding: xPadding, fill: 'black' },
        axis: { padding: 100, stroke: 'black' },
        tickLabels: { fill: 'black' },
        ticks: { stroke: 'black' }
      },
      yAxis: {
        axisLabel: { padding: yPadding, fill: 'black' },
        axis: { stroke: 'black' },
        tickLabels: { fill: 'black' },
        ticks: { stroke: 'black' }
      },
      average: {
        data: { stroke: '#c43a31' }
      }
    };
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Removes noise from data by taking average every chunk-sized chunks
  removeNoise = (data, chunk) => {
    const catchPoints = data.slice(1).map(val => val.y); // Isolate catch data
    const { length } = catchPoints;
    const deletedNoiseArray = [0]; // Start with zero
    let acc = 0;

    // Remove noise
    for (let i = 0; i < length; i++) {
      // If chunk size is reached, push in average for that chunk
      // and reset the acc to 0
      if (!(i % chunk) && i !== 0) {
        deletedNoiseArray.push(acc / chunk);
        acc = 0;
      }

      // Accumulate sum
      acc += catchPoints[i];

      // If length is divisible by chunk, just push average for chunk size
      if (!(length % chunk) && i === length - 1) {
        deletedNoiseArray.push(acc / chunk);
      }

      // Else if we are at the last element, just push in average for however much was left
      else if (i === length - 1) {
        deletedNoiseArray.push(acc / (length % chunk));
      }
    }

    // Return final array
    return deletedNoiseArray;
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Turn date into a string
  stringifyDate = date => {
    // Reformat the date to make it easier to pass into DB/title
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
      month = `0${month}`;
    }

    if (day.length === 1) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Change date to date selected on calendar
  setDate = date => {
    sessionStorage.setItem('date', date);

    this.getDailyData(new Date(sessionStorage.getItem('date')));
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Get graph data for a certain day
  getDailyData = date => {
    // Reformat the date to make it easier to pass into DB/title
    const fullDate = this.stringifyDate(date);

    // Call to backend to get data
    fetch('https://obscure-river-59718.herokuapp.com/dailygraph', {
      method: 'post', // Can't pass in body if it's a GET
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newDate: fullDate // Pass in the new date
      })
    })
      .then(response => response.json())
      .then(data => {
        // Change the dailyData to reflect the new date
        this.setState((prevState, props) => {
          const newData = [{ x: 0, y: 0 }].concat(
            data.map((num, index) => ({
              x: index + 1,
              y: parseInt(num.catches, 10)
            }))
          );
          return { dailyData: newData };
        });
      });
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Update DB/graph when data is input
  updateDailyData = catches => {
    const { dailyData } = this.state;

    // If we are in sandbox, just push to state and don't
    // actually save to DB
    if (localStorage.getItem('sandbox') === 'true') {
      this.setState(prevState => {
        dailyData.push({
          x: prevState.length,
          y: catches
        });
        return { dailyData };
      });
      return;
    }

    // Add new data to DB
    fetch('https://obscure-river-59718.herokuapp.com/dailyupdate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        catches
      })
    })
      .then(response => response.json())
      .then(res => {
        this.getDailyData(new Date(sessionStorage.getItem('date')));
        return res;
      })
      .then(res => {
        sessionStorage.setItem('date', new Date());

        this.setState(prevState => {
          dailyData.push({
            x: prevState.length,
            y: catches
          });
          return { dailyData };
        });
      });
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Create the average line
  createAverageLine = (dailyData, chunk) => {
    return this.removeNoise(dailyData, chunk).map((val, ind) => ({
      x: ind * 5,
      y: val
    }));
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  // Calculate current average
  calculateAverage = dailyData => {
    return (
      dailyData.reduce((acc, val) => acc + val.y, 0) /
      (dailyData.length - 1)
    ).toFixed(2);
  };

  /* ////////////////////////////////////////////////////////////////////////// */

  render() {
    const { xPadding, yPadding } = this.props; // Padding for charts
    const { dailyData } = this.state;

    // Data for average line
    let deletedNoiseArray = [];
    const chunk = 5;

    // Create average line data
    if (dailyData.length > 1) {
      deletedNoiseArray = this.createAverageLine(dailyData, chunk);
    }

    const currentDate = new Date(sessionStorage.getItem('date')); // Current presented date

    const titleDate = this.stringifyDate(currentDate); // Date for title

    const isThereData = dailyData.length === 1; // Is there any data besides the 0

    // If there is data, calculate the average
    const average = isThereData ? 0 : this.calculateAverage(dailyData); // Average

    const styles = this.getStyles(xPadding, yPadding); // Chart styles

    return (
      <div className="mt3 flex justify-center">
        <div
          className="cont flex justify-center mt2 mb3 pl3 pr3 ba br3 bw1"
          style={{ backgroundColor: '#ECD9BA' }}
        >
          <div className="chart mr3 bw1" style={{ width: '600px' }}>
            <VictoryChart
              className="mt6"
              theme={VictoryTheme.material}
              domainPadding={{ x: [0, 30], y: [0, 30] }} // Fix weird cutoff problem sort of
            >
              {/* Title */}
              <VictoryLabel
                text={`Catches ${titleDate}`}
                x={180}
                y={30}
                textAnchor="middle"
              />

              {/* Axes and labels */}
              <VictoryAxis
                style={styles.xAxis}
                label="Attempt"
                fixLabelOverlap
              />
              <VictoryAxis
                style={styles.yAxis}
                dependentAxis
                label="Catches"
                fixLabelOverlap
              />

              {/* Displays if there is no data available */}
              <VictoryLabel
                text="No data available"
                x={180}
                y={180}
                textAnchor="middle"
                style={isThereData ? null : { display: 'none', zIndex: '100' }}
              />

              {/* Line graph */}
              <VictoryLine
                data={isThereData ? [] : dailyData}
                animate={{
                  duration: 1000,
                  onLoad: { duration: 2000 }
                }}
              />

              {/* Data with noise removed */}
              <VictoryLine
                name="noise"
                data={deletedNoiseArray}
                style={styles.average}
                animate={{
                  duration: 1000,
                  onLoad: { duration: 2000 }
                }}
              />

              {/* Scatter plot */}
              <VictoryScatter
                name="points"
                data={isThereData ? [] : dailyData}
                labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`} // Component allows hovering over data for information
                labelComponent={<VictoryTooltip constrainToVisibleArea />}
                animate={{
                  duration: 1000,
                  onLoad: { duration: 2000 }
                }}
              />
            </VictoryChart>
          </div>

          {/* Input field and date selector */}
          <div className="ml3 mt5" style={{ width: '300px' }}>
            <div className="center">
              {/* Enter number field */}
              <div className="overflow-auto">
                <DataEntryField updateDailyData={this.updateDailyData} />
              </div>

              <div className="mt4">
                <h3>{`Average: ${average}`}</h3>
              </div>

              {/* Date picker */}
              <div className="date mt4">
                <h3>Select date:</h3>
                <DateSelect setDate={this.setDate} date={currentDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DailyChart.propTypes = {
  changeCurrentPath: PropTypes.func,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  xPadding: PropTypes.number,
  yPadding: PropTypes.number
};

DailyChart.defaultProps = {
  changeCurrentPath: null,
  location: null,
  xPadding: null,
  yPadding: null
};

export default withRouter(DailyChart);
