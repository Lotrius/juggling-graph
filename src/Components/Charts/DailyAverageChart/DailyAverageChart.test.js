/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import DailyAverageChart from './DailyAverageChart';

let wrapper;
let mockProps;

beforeEach(() => {
  mockProps = {
    changeCurrentPath: jest.fn(),
    location: {},
    mockXPadding: 20,
    mockYPadding: 20
  };

  wrapper = shallow(<DailyAverageChart.WrappedComponent {...mockProps} />);
});

// Test signin
it('Render DailyAverageChart component', () => {
  expect(wrapper).toMatchSnapshot();
});

// Test state changers
describe('Check state', () => {
  it('Has correct initial state', () => {
    expect(wrapper.state()).toEqual({ dailyAverageData: [] });
  });
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

  it('Gives correct output for getAverageData', () => {
    const mockAverageData = [
      { x: 5, y: 14.222222222222221 },
      { x: 11, y: 14.0625 }
    ];
    const mockDate = new Date(2019, 10); // November 2019

    expect.assertions(1);

    return wrapper
      .instance()
      .getAverageData(mockDate)
      .then((data) => {
        expect(data).toEqual(mockAverageData);
      });
  });
});

// Test set function
describe('Check set function', () => {
  it('Gives correct output for set', () => {
    const KEY = 'avgdate';
    const VALUE = new Date();

    wrapper.instance().setDate(VALUE);
    expect(sessionStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(sessionStorage.__STORE__[KEY]).toBe(VALUE.toString());
    expect(Object.keys(sessionStorage.__STORE__).length).toBe(1);
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

    global.sessionStorage.setItem('avgdate', VALUE);

    const spy = jest.spyOn(wrapper.instance(), 'setDate');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
