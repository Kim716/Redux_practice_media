import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (...args) => {
      setIsLoading(true);
      dispatch(thunk(...args))
        .unwrap()
        .catch((error) => setLoadingError(error))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, loadingError];
};
