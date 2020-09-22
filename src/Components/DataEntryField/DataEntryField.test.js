import { shallow } from 'enzyme';
import React from 'react';
import DataEntryField from './DataEntryField';

let wrapper;

beforeEach(() => {
  const mockStartData = [{ x: 0, y: 0 }];
  const mockUpdateDailyData = jest.fn((catches) =>
    mockStartData.push({ x: mockStartData.length, y: catches })
  );

  wrapper = shallow(<DataEntryField updateDailyData={mockUpdateDailyData} />);
});

// Check nothing changed within the file
it('Render DataEntryField component', () => {
  expect(wrapper).toMatchSnapshot();
});
