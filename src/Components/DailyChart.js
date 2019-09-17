import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter, VictoryLabel } from 'victory';
import DateSelect from '../Components/DateSelect';
import DataEntryField from './DataEntryField';
import { withRouter } from 'react-router-dom';
import './Chart.css'

let dailyData = [];

class DailyChart extends Component {
    constructor() {
        super();
        this.state = {
            dailyData: dailyData,
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Update storage and get data when app opened
    componentDidMount() {
        if (sessionStorage.getItem('date')) {
            this.setDate(new Date(sessionStorage.getItem('date')));
        }

        this.props.changeCurrentPath(this.props.location.pathname);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { xPadding, yPadding } = this.props; // Padding for charts

        // Data for average line
        let deletedNoiseArray = [];
        const chunk = 5;

        // Create average line data
        if (dailyData.length > 1) {
            deletedNoiseArray = this.removeNoise(dailyData, chunk).map((val, ind) => ({ x: (ind) * 5, y: val }));
        }

        const currentDate = new Date(sessionStorage.getItem('date')); // Current presented date

        const titleDate = this.stringifyDate(currentDate); // Date for title

        dailyData = this.state.dailyData; // Current data

        const average = (dailyData.length === 1) ? 0 : (dailyData.reduce((acc, val) => acc + val.y, 0) / (dailyData.length - 1)).toFixed(2); // Average

        const styles = this.getStyles(xPadding, yPadding); // Chart styles

        return (
            <div className='mt3 flex justify-center'>
                <div className='cont flex justify-center mt2 pl3 pr3 ba br3 bw1' style={{ backgroundColor: '#ECD9BA' }}>

                    <div className='chart mr3 bw1' style={{ 'width': '600px' }}>
                        <VictoryChart
                            className='mt6'
                            theme={VictoryTheme.material}
                            domainPadding={{ x: [0, 30], y: [0, 30] }} // Fix weird cutoff problem sort of

                            // Component allows hovering over data for information
                            containerComponent={
                                <VictoryVoronoiContainer
                                    labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`}
                                    voronoiBlacklist={['points', 'noise']}
                                />}
                        >

                            {/* Title */}
                            <VictoryLabel text={`Catches ${titleDate}`} x={180} y={30} textAnchor="middle" />

                            {/* Axes and labels */}
                            <VictoryAxis
                                style={styles.xAxis}
                                label='Attempt'
                                fixLabelOverlap
                            />
                            <VictoryAxis
                                style={styles.yAxis}
                                dependentAxis
                                label='Catches'
                                fixLabelOverlap
                            />

                            {/* Line graph */}
                            <VictoryLine
                                data={dailyData.length === 1 ? [] : dailyData}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 2000 }
                                }}
                            />

                            {/* Data with noise removed */}
                            <VictoryLine
                                name='noise'
                                data={deletedNoiseArray}
                                style={styles.average}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 2000 }
                                }}
                            />

                            {/* Scatter plot */}
                            <VictoryScatter
                                name='points'
                                data={dailyData.length === 1 ? [] : dailyData}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 2000 }
                                }}
                            />
                        </VictoryChart>
                    </div>

                    {/* Input field and date selector */}
                    <div className='ml3 mt5' style={{ 'width': '300px' }}>
                        <div className='center'>

                            {/* Enter number field */}
                            <div className='overflow-auto'>
                                <DataEntryField guest={this.props.guest} updateDailyData={this.updateDailyData} />
                            </div>

                            <div className='mt4'>
                                <h3>Average: {average}</h3>
                            </div>

                            {/* Date picker */}
                            <div className='date mt4'>
                                <DateSelect setDate={this.setDate} date={currentDate} />
                            </div>
                        </div>
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

    // Removes noise from data by taking average every chunk-sized chunks
    removeNoise = (data, chunk) => {
        const catchPoints = data.slice(1).map((val) => val.y); // Isolate catch data
        const length = catchPoints.length;
        let deletedNoiseArray = [0]; // Start with zero
        let acc = 0;

        // Remove noise
        for (var i = 0; i < length; i++) {

            // If chunk size is reached, push in average for that chunk
            // and reset the acc to 0
            if (!(i % chunk) && (i !== 0)) {
                deletedNoiseArray.push(acc / chunk);
                acc = 0;
            }

            // Accumulate sum
            acc += catchPoints[i];

            // If we are at the last element, just push in average for however much was left
            if (i === length - 1) {
                deletedNoiseArray.push(acc / (length % chunk));
            }
        }

        // Return final array
        return deletedNoiseArray;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Turn date into a string
    stringifyDate = (date) => {
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

        return `${year}-${month}-${day}`;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Change date to date selected on calendar
    setDate = (date) => {
        sessionStorage.setItem('date', date);

        this.getDailyData(new Date(sessionStorage.getItem('date')));
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Get graph data for a certain day
    getDailyData = (date) => {
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
                // TODO: Don't set up initial dailyData like this. Idea: update DB to include a 0 catch every day
                dailyData = [{ x: 0, y: 0 }].concat(data.map((num, index) => ({ x: index + 1, y: parseInt(num.catches) })));
                this.setState({ dailyData });
            });
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Update DB/graph when data is input
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
                this.setState({ date: new Date() }, () => this.getDailyData(this.state.date));
                return res;
            })
            .then((res) => {
                // Update the state
                // I COULD call getDailyData but that would just take too much time tbh
                // TODO: Is there a better way to do this? Combine this function and getDailyData somehow?
                dailyData.push({ x: dailyData.length, y: res.catches });
                this.setState({ dailyData });
            });
    }
}

export default withRouter(DailyChart);