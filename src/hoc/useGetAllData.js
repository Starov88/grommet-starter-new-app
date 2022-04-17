import { useCallback } from 'react';
import useRequest from './useRequest';

const useGetAllData = (dataService, filterObj) => {
    const request = useCallback(() => dataService.getAll(filterObj), [dataService, filterObj]);
    return useRequest(request);
}

export default useGetAllData;