import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import useAsyncLoader from '../useAsyncLoader';
import { instance } from '../../api';

describe('useAsyncLoader', () => {
  it('should perform GET request', async () => {
    const mock = new MockAdapter(instance);
    const url = 'character';
    const mockData = {
      results: [
        {
          id: 1,
          name: 'Rick'
        }
      ]
    };

    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useAsyncLoader(url));

    expect(result.current).toEqual([null, null]);
    await waitForNextUpdate();
    expect(result.current).toEqual([mockData, null]);
  });

  it('should set error', async () => {
    const mock = new MockAdapter(instance);
    const url = 'character';

    mock.onGet(url).reply(500, new Error('Error'));

    const { result, waitForNextUpdate } = renderHook(() => useAsyncLoader(url));

    expect(result.current).toEqual([null, null]);
    await waitForNextUpdate();
    expect(result.current).toEqual([
      null,
      Error('Request failed with status code 500')
    ]);
  });
});
