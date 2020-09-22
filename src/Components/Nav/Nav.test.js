import { shallow } from 'enzyme';
import React from 'react';
import Nav from './Nav';

it('Render Nav component', () => {
  expect(shallow(<Nav />)).toMatchSnapshot();
});
