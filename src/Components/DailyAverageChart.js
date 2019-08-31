import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryScatter, VictoryVoronoiContainer } from 'victory';

const XPadding = 30;
const YPadding = 40;

class DailyAverageChart extends Component {
    render() {
        const { dailyAverageData } = this.props;

        // const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

        return (
            <div className='mw6 center'>
                <VictoryChart
                    theme={VictoryTheme.material}
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Day ${datum.x} average: ${datum.y} catches`}
                            voronoiBlacklist={['points']}
                        />
                    }
                    style={{
                        // parent: { width: '50%', height: 'auto' }
                    }}
                >
                    <VictoryAxis style={{ axisLabel: { padding: XPadding }, axis: { padding: 100 } }} label='Day' fixLabelOverlap />
                    <VictoryAxis style={{ axisLabel: { padding: YPadding } }} dependentAxis label='Average Number Catches' fixLabelOverlap />
                    <VictoryLine
                        data={dailyAverageData}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 0 }
                        }}
                    />
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