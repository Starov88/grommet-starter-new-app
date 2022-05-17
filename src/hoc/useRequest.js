import { useState, useMemo, useEffect } from 'react';

const useRequest = (request) => {

    const initState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), []);

    const [dataState, setDataState] = useState(initState);

    useEffect(() => {
        console.log("useEffect");

        setDataState(initState);

        let cancelled = false;
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading: false,
                error: null
            }))
            .catch((error) => {
                !cancelled && setDataState({
                    data: null,
                    loading: false,
                    error: error.message
                })
            });

        return () => {
            console.log("clearUseEffect");
            cancelled = true;
        }
    }, [request, initState]); // [] - one time

    return dataState;
}

export default useRequest;