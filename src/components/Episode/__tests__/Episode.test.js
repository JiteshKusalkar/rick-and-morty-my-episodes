import React from 'react';
import { render } from '@testing-library/react';

import useAsyncLoader from '../../../utils/useAsyncLoader';
import Episode from '../Episode';
jest.mock('../../../utils/useAsyncLoader');

describe('Episode', () => {
  it('should list episode', () => {
    useAsyncLoader.mockReturnValue([
      {
        episode: 'S01E01',
        name: 'Episode Name',
        air_date: 'December 19, 2001'
      }
    ]);

    const { container } = render(<Episode episode="test" />);
    expect(container.querySelector('p').textContent).toEqual('S01E01');
  });

  it('should show loader when loading', () => {
    useAsyncLoader.mockReturnValue([null, null]);

    const { container } = render(<Episode episode="test" />);
    expect(container.querySelector('p').textContent).toEqual(
      'Loading...'
    );
  });

  it('should show error if API fails', () => {
    useAsyncLoader.mockReturnValue([null, new Error('Error')]);

    const { container } = render(<Episode episode="test" />);
    expect(container.querySelector('p').textContent).toEqual(
      'Error While Loading'
    );
  });
});
