import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter, VictoryLabel } from 'victory';
import DateSelect from '../Components/DateSelect';
import DataEntryField from './DataEntryField';

class DailyChart extends Component {


    render() {
        const { dailyData, updateDailyData, xPadding, yPadding, date, setDate } = this.props;
        return (
            <div className='flex justify-center'>
                <div className='mr5' style={{ 'width': '600px' }}>
                    <VictoryChart
                        className='mt6'
                        theme={VictoryTheme.material}
                        domainPadding={{ x: [0, 70] }} // Fix weird cutoff problem sort of

                        // Component allows hovering over data for information
                        containerComponent={
                            <VictoryVoronoiContainer
                                labels={({ datum }) => `Attempt ${datum.x}: ${datum.y} catches`}
                                voronoiBlacklist={['points']}
                            />}

                        style={{ parent: { maxWidth: '200%' } }}
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
                </div>

                <div className='mt5' style={{ 'width': '300px' }}>
                    <div className='center'>

                        {/* Enter number field */}
                        <div className='mb3 overflow-auto'  >
                            <DataEntryField updateDailyData={updateDailyData} />
                        </div>

                        {/* Select date */}
                        <div>
                            <DateSelect setDate={setDate} />
                        </div>
                    </div>


                </div>
            </div>
        );
    }


}

export default DailyChart;