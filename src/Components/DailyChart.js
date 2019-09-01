import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter } from 'victory';

import DataEntryField from './DataEntryField';

class DailyChart extends Component {


    render() {
        const { dailyData, updateDailyData, xPadding, yPadding } = this.props;

        // Custom tick marks
        const xAxisTicks = dailyData.map(dat => dat.x);
        xAxisTicks.push(dailyData.length);

        return (
            <div className='mw6 center'>

                {/* Chart */}
                <VictoryChart
                    theme={VictoryTheme.material}

                    // Component allows hovering over data for information
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`}
                            voronoiBlacklist={['points']}
                        />}
                >

                    {/* Axes and labels */}
                    <VictoryAxis style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }} label='Attempt Number' tickValues={xAxisTicks} />
                    <VictoryAxis crossAxis={false} style={{ axisLabel: { padding: yPadding } }} dependentAxis label='Catches' />

                    {/* Line graph */}
                    <VictoryLine
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />

                    {/* Scatter plot */}
                    <VictoryScatter
                        name='points'
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
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