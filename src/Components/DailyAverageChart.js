import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryBar, VictoryAxis, VictoryLabel, VictoryTooltip } from 'victory';
import DateSelectAvg from './DateSelectAvg';
import { withRouter } from 'react-router-dom';
import './Chart.css'

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

        let currentDate = new Date(sessionStorage.getItem('avgdate'));

        let dailyAverageDataMonth = months[(currentDate.getMonth())]; // Declare month name var

        const styles = this.getStyles(xPadding, yPadding);

        return (
            <div className='mt3 flex justify-center'>
                <div className='cont flex justify-center mt2 mb3 pl3 pr3 ba bw1' style={{ backgroundColor: '#ECD9BA' }}>
                    <div className='chart mr3' style={{ 'width': '600px' }}>
                        {/* Chart */}
                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={{ x: [50, 30], y: [50, 30] }} // Fix overlapping/cutoff problem
                        >

                            {/* Title */}
                            <VictoryLabel text={`Average catches ${dailyAverageDataMonth}`} x={180} y={30} textAnchor="middle" />

                            {/* Axes and labels */}
                            <VictoryAxis
                                style={styles.xAxis}
                                label='Day'
                                fixLabelOverlap
                            />
                            <VictoryAxis
                                style={styles.yAxis}
                                dependentAxis
                                label='Average Catches'
                                fixLabelOverlap
                            />

                            {/* Displays if there is no data available */}
                            <VictoryLabel
                                text='No data available'
                                x={180}
                                y={180}
                                textAnchor='middle'
                                style={dailyAverageData.length === 0 ? null : { display: 'none', zIndex: '100' }}
                            />

                            {/* Bar graph */}
                            <VictoryBar
                                data={dailyAverageData}
                                labels={({ datum }) => `${datum.x} average: ${+datum.y.toFixed(2)} catches`}
                                labelComponent={<VictoryTooltip constrainToVisibleArea />}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 0 }
                                }}
                            />
                        </VictoryChart>
                    </div>


                    {/* Date picker */}
                    <div className='date ml3 mt5 center' style={{ 'width': '225px' }}>
                        <h3>Select date:</h3>
                        <DateSelectAvg setDate={this.setDate} averageDate={currentDate} />
                    </div>

                </div>
            </div>
        );
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                data: { stroke: "#c43a31" }
            }
        }
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
                dailyAverageData = avgdata.map((dat) => ({ x: parseInt(dat.to_char.substring(8, 10)), y: parseFloat(dat.avg) }));
                this.setState({ dailyAverageData });
            })
    }
}

export default withRouter(DailyAverageChart);