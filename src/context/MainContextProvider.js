import { useReducer } from 'react';
import useMainReducer from '../reducers/useMainReducer';
import { MainContext } from './mainContext';
const baseQuery = {
    modalidad: 'Todo.',
    search: '',
    unidad: 'Todo.',
}
const initState = {
    documentList: {
        'perfil': {
            ...baseQuery,
            modalidad: 'Perfil'
        },
        'tesis': {
            ...baseQuery,
            modalidad: 'Tesis'
        },
        'grade-project': {
            ...baseQuery,
            modalidad: 'Proyecto de Grado'
        },
        'monografia': {
            ...baseQuery,
            modalidad: 'Monografías'
        },
        'fatescipol': {
            ...baseQuery,
            unidad: 'FATESCIPOL (Fac. Técnica, pregrado).'
        },
        'anapol': {
            ...baseQuery,
            unidad: 'ANAPOL (Pregrado).'
        },
        'cefotes': {
            ...baseQuery,
            unidad: 'CEFOTES (Posgrado).'
        },
        'esp': {
            ...baseQuery,
            unidad: 'ESCUELA SUPERIOR (Posgrado).'
        }
    },

    results: [

    ]
}

const MainContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(useMainReducer, initState);
    // const [listFavorites, setListFavorites] = useState([]);
    // const favoritesObject = {listFavorites, setListFavorites}
    return <MainContext.Provider value={{state, dispatch}}>
        {children}
    </MainContext.Provider> 
}
export default MainContextProvider;