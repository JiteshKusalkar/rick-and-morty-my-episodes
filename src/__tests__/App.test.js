import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import useAsyncLoader from '../utils/useAsyncLoader';
import App from '../App';
import Searchbox from '../components/Searchbox';
import { data } from '../__mocks__/AppMocks';
jest.mock('../utils/useAsyncLoader');

describe('App', () => {
  it('should list character names', () => {
    useAsyncLoader.mockReturnValue([data]);

    const { container } = render(<App />);
    expect(container.querySelector('[data-testid="searchbox"]')).toBeDefined();
  });

  it('should show selected character', async () => {
    useAsyncLoader.mockReturnValue([data]);
    const { getByText, container } = render(<App />);

    const listOptions = container.querySelector('.react_select__input input');
    fireEvent.focus(listOptions);

    const listControl = container.querySelector('.react_select__control');
    fireEvent.mouseDown(listControl);

    const option = getByText('Rick');
    fireEvent.click(option);

    expect(container.querySelector('.episode-header')).toBeDefined();
    expect(container.querySelector('[data-testid="character"]')).toBeDefined();
  });
});
