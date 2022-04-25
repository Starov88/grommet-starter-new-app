import { useCallback } from 'react';
import useRequest from './useRequest';

const useGetSingleData = (dataService, id) => {
    const request = useCallback(() => dataService.get(id), [dataService, id]);
    return useRequest(request);
}

export default useGetSingleData;