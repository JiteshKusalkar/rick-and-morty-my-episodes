import { shallow } from 'enzyme';
import React from 'react';

import Character from '../Character';

// tslint:disable-next-line:no-require-imports
const unroll = require('unroll');
unroll.use(it);

const validProps = {
  character: {
    image: 'https//image-url',
    name: 'Rick',
    gender: 'Male',
    species: 'Human',
    status: 'Alive',
    type: 'Angry Human',
    origin: {
      name: 'Earth'
    },
    location: {
      name: 'Earth'
    }
  }
};

const emptyProps = { character: { ...validProps.character, type: undefined } };

const shallowInstance = props => shallow(<Character {...props} />);

// Snapshot testing
describe('Character', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowInstance(emptyProps);
  });

  unroll(
    'should match the snapshot for #propType',
    (done, args) => {
      wrapper.setProps(args.value);
      expect(wrapper).toMatchSnapshot();
      done();
    },
    [
      ['propType', 'value'],
      ['valid props', validProps],
      ['empty props', emptyProps]
    ]
  );
});
