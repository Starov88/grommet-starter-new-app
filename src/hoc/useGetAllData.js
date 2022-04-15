import { useCallback } from 'react';
import useRequest from './useRequest';

const useGetAllData = (cakeService, filter) => {
    const request = useCallback(() => cakeService.getAll(filter), [cakeService, filter]);
    return useRequest(request);
}

export default useGetAllData;