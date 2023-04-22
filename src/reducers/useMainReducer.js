import { MainTypes } from "../types/typesFavorites"

const useMainReducer = (state, action) => {
    const { results } = state;
    switch(action.type) {
        case MainTypes.searchDocument : {
            return {...state, results: action.payload};
        }
        default: 
            throw new Error();
    }
}
export default useMainReducer;