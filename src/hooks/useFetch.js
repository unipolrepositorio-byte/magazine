import { useState } from "react";
//import articles from '';

const articles = [
    {
        id: 34,
        title: 'canopy-top measurements do not accurate',
        date: '04/15/2023',
        brief: 'Spectral turning of visual pigments often faciliates... ',
        Autors: ['Marco Antonio', 'Guillermo'],
        pdf: 'route to download'
    },
    {
        id: 35,
        title: 'canopy-top measurements do not accurate',
        date: '04/15/2023',
        Autors: ['Marco Antonio', 'Guillermo'],
        brief: 'Spectral turning of visual pigments often faciliates... ',
        pdf: 'route to download'
    },
    {
        id: 36,
        title: 'canopy-top measurements do not accurate',
        date: '04/15/2023',
        Autors: ['Marco Antonio', 'Guillermo'],
        brief: 'Spectral turning of visual pigments often faciliates... ',
        pdf: 'route to download'
    }
]

const useFetch = (loading = true) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(loading);
    const getData = async(limit = false) => {
        const response = await articles  //await fetch(articles);
        //const { data } = await response.json();
        const data = await response;
        if (limit !== false) {
            const newData = data.slice(0, limit)
            console.log(newData.length);
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