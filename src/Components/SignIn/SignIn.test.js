import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SignIn from './SignIn';

let wrapper;

beforeEach(() => {
  const mockChangeLoginStatus = jest.fn();
  wrapper = shallow(<SignIn changeLoginStatus={mockChangeLoginStatus} />);
});

// Test signin
it('Render SignIn component', () => {
  //   const renderer = new ShallowRenderer();
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});

// Test state changers
describe('Check state', () => {
  it('Has correct initial state', () => {
    expect(wrapper.state()).toEqual({ signInEmail: '', signInPassword: '' });
  });

  it('Changes password state', () => {
    const mockEvent = {
      target: { value: 'password' }
    };

    wrapper.find('[id="password"]').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({
      signInEmail: '',
      signInPassword: 'password'
    });
  });

  it('Changes password state', () => {
    const mockEvent = {
      target: { value: 'email@email.com' }
    };

    wrapper.find('[id="email-address"]').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({
      signInEmail: 'email@email.com',
      signInPassword: ''
    });
  });
});
