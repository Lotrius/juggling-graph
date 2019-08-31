import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter } from 'victory';

import DataEntryField from './DataEntryField';

const XPadding = 30;
const YPadding = 40;

class DailyChart extends Component {


    render() {
        const { dailyData, updateDailyData } = this.props;

        const xAxisTicks = dailyData.map(dat => dat.x);
        xAxisTicks.push(dailyData.length);

        return (
            <div className='mw6 center'>
                <VictoryChart
                    theme={VictoryTheme.material}
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`}
                            voronoiBlacklist={['points']}
                        />}
                    style={{
                        // parent: { width: '50%', height: 'auto' }
                    }}
                >
                    <VictoryAxis style={{ axisLabel: { padding: XPadding }, axis: { padding: 100 } }} label='Attempt Number' tickValues={xAxisTicks} />
                    <VictoryAxis style={{ axisLabel: { padding: YPadding } }} dependentAxis label='Catches' />
                    <VictoryLine
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />
                    <VictoryScatter
                        name='points'
                        data={dailyData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />
                </VictoryChart>
                <DataEntryField updateDailyData={updateDailyData} />
            </div>
        );
    }


}

export default DailyChart;