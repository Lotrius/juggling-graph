import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryBar, VictoryAxis, VictoryVoronoiContainer, VictoryLabel } from 'victory';
// import DateSelectAvg from './DateSelectAvg';

class DailyAverageChart extends Component {
    render() {
        const { dailyAverageData, xPadding, yPadding } = this.props;

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'] // Array of month names
        
        let dailyAverageDataMonth = ''; // Declare month name var

        // If dailyAverageData has data in it, get the month name
        if(dailyAverageData.length > 0) {
            dailyAverageDataMonth = months[parseInt(dailyAverageData[0]['x'].substring(5,7)) - 1];
        }

        return (
            <div className='mw6 center'>
                {/* Chart */}
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: [50, 90] }} // Fix overlapping/cutoff problem

                    // Component allows hovering over data for information
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `${datum.x} average: ${+datum.y.toFixed(2)} catches`}
                            voronoiBlacklist={['points']}
                        />
                    }
                >
                    <VictoryLabel text={dailyAverageData.length > 0 ? `Average catches ${dailyAverageDataMonth}` : ''} x={180} y={30} textAnchor="middle" />

                    {/* Axes and labels */}
                    <VictoryAxis
                        style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }}
                        label='Day'
                        fixLabelOverlap
                        tickValues={
                            dailyAverageData.length === 0 ? [0, 1] : dailyAverageData.map((data) => data.y)
                        }
                    />
                    <VictoryAxis
                        style={{ axisLabel: { padding: yPadding } }}
                        dependentAxis
                        label='Average Number Catches'
                        fixLabelOverlap
                        tickValues={
                            dailyAverageData.length === 0 ? [0, 1] : []
                        }
                    />

                    {/* Line graph */}
                    <VictoryBar
                        data={dailyAverageData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />
                </VictoryChart>

                {/* <DateSelectAvg></DateSelectAvg> */}
            </div>
        );
    }
}

export default DailyAverageChart;