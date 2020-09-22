/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import DailyChart from './DailyChart';

let wrapper;
let mockProps;

beforeEach(() => {
  mockProps = {
    changeCurrentPath: jest.fn(),
    location: {},
    mockXPadding: 20,
    mockYPadding: 20
  };

  wrapper = shallow(<DailyChart.WrappedComponent {...mockProps} />);
});

// Test signin
it('Render DailyAverageChart component', () => {
  expect(wrapper).toMatchSnapshot();
});

// Test get functions
describe('Check get functions', () => {
  it('Gives correct output for getStyles', () => {
    const mockReturnValue = {
      xAxis: {
        axisLabel: { padding: 20, fill: 'black' },
        axis: { padding: 100, stroke: 'black' },
        tickLabels: { fill: 'black' },
        ticks: { stroke: 'black' }
      },
      yAxis: {
        axisLabel: { padding: 20, fill: 'black' },
        axis: { stroke: 'black' },
        tickLabels: { fill: 'black' },
        ticks: { stroke: 'black' }
      },
      average: {
        data: { stroke: '#c43a31' }
      }
    };

    expect(
      wrapper
        .instance()
        .getStyles(mockProps.mockXPadding, mockProps.mockYPadding)
    ).toEqual(mockReturnValue);
  });
});

// Test componentDidMount
describe('Check componentDidMount', () => {
  it('Calls only changeCurrentPath', () => {
    const spy = jest.spyOn(wrapper.instance().props, 'changeCurrentPath');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Also calls setDate', () => {
    const VALUE = new Date();

    global.sessionStorage.setItem('date', VALUE);

    const spy = jest.spyOn(wrapper.instance(), 'setDate');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('Test all other functions', () => {
  it('Calls removeNoise correctly 1', () => {
    const mockData = [
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 20, y: 20 }
    ];

    const deletedNoise = [0, 15];

    expect(wrapper.instance().removeNoise(mockData, 5)).toEqual(deletedNoise);
  });

  it('Calls removeNoise correctly 2', () => {
    const mockData = [{ x: 0, y: 0 }];

    const deletedNoise = [0];

    expect(wrapper.instance().removeNoise(mockData, 5)).toEqual(deletedNoise);
  });

  it('Calls stringifyDate correctly', () => {
    const date = new Date(2020, 1, 26);

    expect(wrapper.instance().stringifyDate(date)).toEqual('2020-02-26');
  });
});
