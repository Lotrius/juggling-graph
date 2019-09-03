import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryBar, VictoryAxis, VictoryVoronoiContainer } from 'victory';

class DailyAverageChart extends Component {
    render() {
        const { dailyAverageData, xPadding, yPadding } = this.props;

        console.log(dailyAverageData.map(val => +parseFloat(val.y).toFixed(2)));

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

                    {/* Axes and labels */}
                    <VictoryAxis
                        style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }}
                        label='Day'
                        fixLabelOverlap
                        tickValues={
                            dailyAverageData.length === 1 ? [0, 1] :  []
                        }
                    />
                    <VictoryAxis
                        style={{ axisLabel: { padding: yPadding } }}
                        dependentAxis
                        label='Average Number Catches'
                        fixLabelOverlap
                        tickValues={
                            dailyAverageData.length === 1 ? [0, 1] : []
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
            </div>
        );
    }

}

export default DailyAverageChart;