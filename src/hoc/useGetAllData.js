import { useCallback, useMemo } from 'react';
import useRequest from './useRequest';

const useGetAllData = (cakeService, filter) => {
    const memoFilter = useMemo(() => (filter), []);
    const request = useCallback(() => cakeService.getAll(memoFilter), [cakeService, memoFilter]);
    return useRequest(request);
}

export default useGetAllData;