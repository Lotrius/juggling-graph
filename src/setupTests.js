/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-localstorage-mock');

configure({ adapter: new Adapter() });
