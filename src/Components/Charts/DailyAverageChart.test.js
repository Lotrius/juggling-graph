/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
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
  //   const renderer = new ShallowRenderer();
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});

// Test state changers
describe('Check state', () => {
  it('Has correct initial state', () => {
    expect(wrapper.state()).toEqual({ dailyAverageData: [] });
  });
});

// Test get function
describe('Check get function', () => {
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
