import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryScatter, VictoryVoronoiContainer } from 'victory';

class DailyAverageChart extends Component {
    render() {
        const { dailyAverageData, xPadding, yPadding } = this.props;

        return (
            <div className='mw6 center'>
                {/* Chart */}
                <VictoryChart
                    theme={VictoryTheme.material}

                    // Component allows hovering over data for information
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Day ${datum.x} average: ${datum.y} catches`}
                            voronoiBlacklist={['points']}
                        />
                    }
                >

                    {/* Axes and labels */}
                    <VictoryAxis style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }} label='Day' fixLabelOverlap />
                    <VictoryAxis style={{ axisLabel: { padding: yPadding } }} dependentAxis label='Average Number Catches' fixLabelOverlap />

                    {/* Line graph */}
                    <VictoryLine
                        data={dailyAverageData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />

                    {/* Scatter plot */}
                    <VictoryScatter
                        name='points'
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