import { useState } from "react"

const useSearch = () => {
    const [searchInput, setSearchInput] = useState(false);
    const [date, setDate] = useState('ABRIL 16. 2023');
    const [volume, setVolume] = useState(1);

    return {
        searchInput, 
        setSearchInput, 
        date, 
        setDate, 
        volume, 
        setVolume
    }
}
export default useSearch;