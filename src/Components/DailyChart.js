import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter, VictoryLabel } from 'victory';

import DataEntryField from './DataEntryField';

class DailyChart extends Component {


    render() {
        const { dailyData, updateDailyData, xPadding, yPadding, date } = this.props;

        // Custom tick marks
        // const xAxisTicks = dailyData.map(dat => dat.x);
        // xAxisTicks.push(dailyData.length);

        return (
            <div className='mw6 center'>

                {/* Chart */}
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{x: [0, 70]}} // Fix weird cutoff problem sort of

                    // Component allows hovering over data for information
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`}
                            voronoiBlacklist={['points']}
                        />}
                >
                    <VictoryLabel text={`Catches ${date}`} x={180} y={30} textAnchor="middle" />

                    {/* Axes and labels */}
                    <VictoryAxis
                        style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }}
                        label='Attempt Number'
                        tickValues={
                            dailyData.length === 1 ? [0, 1] : []
                        }
                    />
                    <VictoryAxis
                        style={{ axisLabel: { padding: yPadding } }}
                        dependentAxis
                        label='Catches'
                        tickValues={
                            dailyData.length === 1 ? [0, 1] : []
                        }
                    />

                    {/* Line graph */}
                    <VictoryLine
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 2000 }
                        }}
                    />

                    {/* Scatter plot */}
                    <VictoryScatter
                        name='points'
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 2000 }
                        }}
                    />
                </VictoryChart>

                <br></br>

                {/* Input field to input num catches */}
                <DataEntryField updateDailyData={updateDailyData} />
            </div>
        );
    }


}

export default DailyChart;