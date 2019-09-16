import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryBar, VictoryAxis, VictoryVoronoiContainer, VictoryLabel } from 'victory';
import DateSelectAvg from './DateSelectAvg';
import { withRouter } from 'react-router-dom';

let dailyAverageData = [];

class DailyAverageChart extends Component {
    constructor() {
        super();
        this.state = {
            dailyAverageData: dailyAverageData,
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Update storage and get data when app opened
    componentDidMount() {
        if (sessionStorage.getItem('avgdate')) {
            this.setDate(new Date(sessionStorage.getItem('avgdate')));
        }

        this.props.changeCurrentPath(this.props.location.pathname);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { xPadding, yPadding } = this.props;

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] // Array of month names

        var currentDate = new Date(sessionStorage.getItem('avgdate'));

        let dailyAverageDataMonth = months[(currentDate.getMonth())]; // Declare month name var

        return (
            <div className='mw6 center'>
                {/* Chart */}
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: [50, 30], y: [50, 30] }} // Fix overlapping/cutoff problem

                    // Component allows hovering over data for information
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `${datum.x} average: ${+datum.y.toFixed(2)} catches`}
                            voronoiBlacklist={['points']}
                        />
                    }
                >

                    {/* Title */}
                    <VictoryLabel text={`Average catches ${dailyAverageDataMonth}`} x={180} y={30} textAnchor="middle" />

                    {/* Axes and labels */}
                    <VictoryAxis
                        style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }}
                        label='Day'
                        fixLabelOverlap
                    />
                    <VictoryAxis
                        style={{ axisLabel: { padding: yPadding } }}
                        dependentAxis
                        label='Average Catches'
                        fixLabelOverlap
                    />

                    {/* Bar graph */}
                    <VictoryBar
                        data={dailyAverageData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />
                </VictoryChart>

                {/* Date picker */}
                <DateSelectAvg setDate={this.setDate} averageDate={currentDate} />
            </div>
        );
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Change date to date selected on calendar
    setDate = (date) => {
        sessionStorage.setItem('avgdate', date);
        
        this.getAverageData(new Date(sessionStorage.getItem('avgdate')));
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Get average data graph
    getAverageData = (date) => {
        // Stringify date
        const year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();

        if (month.length === 1) {
            month = '0' + month;
        }

        const selectedMonth = year + '-' + month;

        // Call to backend
        fetch('https://obscure-river-59718.herokuapp.com/averagegraph', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                selectedMonth: selectedMonth
            })
        })
            .then(response => response.json())
            .then((avgdata) => {
                dailyAverageData = avgdata.map((dat) => ({ x: dat.to_char.substring(8, 10), y: parseFloat(dat.avg) }));
                this.setState({ dailyAverageData });
            })
    }
}

export default withRouter(DailyAverageChart);