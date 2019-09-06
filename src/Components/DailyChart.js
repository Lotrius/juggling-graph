import React, { Component } from 'react';
import { VictoryTheme, VictoryChart, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryScatter, VictoryLabel } from 'victory';
import DateSelect from '../Components/DateSelect';
import DataEntryField from './DataEntryField';

class DailyChart extends Component {

    // Removes noise from data by taking average every chunk-sized chunks
    removeNoise = (data, chunk) => {
        const catchPoints = data.slice(1).map((val) => val.y); // Isolate catch data
        const length = catchPoints.length;
        let deletedNoiseArray = [0];
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

    render() {
        const { dailyData, updateDailyData, xPadding, yPadding, date, setDate } = this.props;

        let deletedNoiseArray = [];
        const chunk = 5;

        if (dailyData.length > 1) {
            deletedNoiseArray = this.removeNoise(dailyData, chunk).map((val, ind) => ({ x: (ind) * 5, y: val }));
        }

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
                                voronoiBlacklist={['points', 'noise']}
                            />}

                        style={{ parent: { maxWidth: '200%' } }}
                    >
                        <VictoryLabel text={`Catches ${date}`} x={180} y={30} textAnchor="middle" />

                        {/* Axes and labels */}
                        <VictoryAxis
                            style={{ axisLabel: { padding: xPadding }, axis: { padding: 100 } }}
                            label='Attempt'
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

                        {/* Data with noise removed */}
                        <VictoryLine
                            name='noise'
                            data={deletedNoiseArray}
                            style={{
                                data: { stroke: "#c43a31" }
                            }}
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

                {/* Input field and date selector */}
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