import { useState } from "react"

const useSearch = () => {
    const [searchInput, setSearchInput] = useState(false);
    const [initialDate, setInitialDate] = useState('...');
    const [initialVolume, setInitialVolume] = useState('...');
    const [initialId, setInitialId] = useState();

    return {
        searchInput, 
        setSearchInput, 
        initialDate, 
        setInitialDate,
        initialVolume, 
        setInitialVolume,
        initialId, 
        setInitialId
    }
}
export default useSearch;