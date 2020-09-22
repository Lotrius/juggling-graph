import { shallow } from 'enzyme';
import React from 'react';
import DateSelectAvg from './DateSelectAvg';

it('Render DateSelectAvg component', () => {
  expect(shallow(<DateSelectAvg />)).toMatchSnapshot();
});
