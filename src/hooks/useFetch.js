import { useEffect, useState } from "react";

export const useFetch = (inititalData, url) => {
    const [data, setData] = useState(inititalData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(url);
                const { results } = await response.json();
                // console.log(results);
                
                setData(results);
                setIsLoading(true);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchUser();
    }, []);

    return { data, isLoading, error };
};
