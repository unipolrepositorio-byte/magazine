import { useState } from "react"

const useSearch = () => {
    const [searchInput, setSearchInput] = useState(false);

    return {searchInput, setSearchInput}
}
export default useSearch;