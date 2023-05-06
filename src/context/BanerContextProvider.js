import {BanerContext} from './BanerContext';
import useSearch from '../hooks/useSearch';

export default function BanerContextProvider({children}) {
    const useSearchGlobal = useSearch(); 
    return (
    <BanerContext.Provider value={useSearchGlobal} >
        {children}
    </BanerContext.Provider>
  )
}
