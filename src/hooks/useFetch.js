import { useState } from "react";
import articles from '../__mock__/article.json';

const useFetch = (loading = true) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(loading);
    const getData = async(limit = false) => {
        const response = await articles  //await fetch(articles);
        //const { data } = await response.json();
        const data = await response;
        if (limit !== false) {
            const newData = data.slice(0, limit)
            setData(newData); 
            setIsLoading(false);
        } else {
            setData(data); 
            setIsLoading(false);
        }
    };
    return {data, isLoading, getData, setIsLoading};
}
export default useFetch;