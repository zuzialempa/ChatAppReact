import { useState, useEffect } from 'react';

function useFetch(url, headers) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers ? headers : {} 
        });
        const json = await response.json();
        await setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}
export { useFetch };