import { useEffect, useState } from 'react';
import { instance } from '../api';

const useAsyncLoader = (url, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    instance
      .get(url, { params })
      .then(res => res.data)
      .then(res => setData(res))
      .catch(e => setError(e));
  }, []);

  return [data, error];
};

export default useAsyncLoader;
