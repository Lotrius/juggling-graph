import { shallow } from 'enzyme';
import React from 'react';
import DateSelect from './DateSelect';

it('Render DateSelect component', () => {
  expect(shallow(<DateSelect />)).toMatchSnapshot();
});
