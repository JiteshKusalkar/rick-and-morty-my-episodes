import React from 'react';
import { render } from '@testing-library/react';

import useAsyncLoader from '../../../utils/useAsyncLoader';
import RecommendedCharacters from '../RecommendedCharacters';
import { props, data } from '../__mocks__/RecommendedCharactersMocks';
jest.mock('../../../utils/useAsyncLoader');

describe('RecommendedCharacters', () => {
  it('should list character names', () => {
    useAsyncLoader.mockReturnValue([data]);

    const { container } = render(<RecommendedCharacters {...props} />);
    expect(container.querySelectorAll('span').length).toEqual(2);
  });

  it('should select character on click', () => {
    useAsyncLoader.mockReturnValue([data]);

    const { container } = render(<RecommendedCharacters {...props} />);
    container.querySelectorAll('span')[0].click();
    expect(props.onSelect).toHaveBeenCalledWith({
      id: 2,
      name: 'Morty'
    });
  });

  it('should show no data message', () => {
    useAsyncLoader.mockReturnValue([null]);

    const { container } = render(<RecommendedCharacters {...props} />);
    expect(container.querySelector('span').textContent).toEqual(
      'No Recommended Characters'
    );
  });
});
