import MockAdapter from 'axios-mock-adapter';
import { shallow } from 'enzyme';
import React from 'react';

import Searchbox, { loadOptions } from '../Searchbox';
import { instance } from '../../../api';

// tslint:disable-next-line:no-require-imports
const unroll = require('unroll');
unroll.use(it);

const validProps = {
  loadOptions: jest.fn(),
  defaultOptions: [
    {
      label: 'Rick',
      value: 1
    }
  ]
};

const shallowInstance = props => shallow(<Searchbox {...props} />);

// Snapshot testing
describe('Searchbox', () => {
  unroll(
    'should match the snapshot for #propType',
    (done, args) => {
      const wrapper = shallowInstance(args.value);
      expect(wrapper).toMatchSnapshot();
      done();
    },
    [
      ['propType', 'value'],
      ['valid props', validProps]
    ]
  );
});

// Unit testing
describe('Searchbox', () => {
  it('should load options', () => {
    jest.clearAllMocks();
    const mock = new MockAdapter(instance);
    const url = 'character';
    const callback = jest.fn();
    const mockData = {
      results: [
        {
          id: 1,
          name: 'Rick'
        }
      ]
    };

    mock.onGet(url, { params: { name: 'rick' } }).reply(200, mockData);
    loadOptions('rick', callback);

    expect(callback).toBeDefined();
  });
});
