import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import searchDocuments from "../../async/services/listDocuments";
import search from "../../async/services/search";
import { MainContext } from "../../context/mainContext";
import { MainTypes } from "../../types/typesFavorites";
import ItemComponent from "./itemComponent";
import useStyles from "./mainComponent.styles";

const MainComponent = () => {
    const { id } = useParams();
    
    const useQuery = () => new URLSearchParams(useLocation().search);
    let query = useQuery();
    const { state, dispatch } = useContext(MainContext);
    const { documentList, results } = state;
    useEffect(() => {
        if (id !== 'search') {
            getData();
        } else if (id === 'search') {
            searchData(query.get('searchcriterion'));
        }
    }, []);
    const getData = async() => {
        await searchDocuments(documentList[id]).then(( { data }) => {
            // console.log('data', response.data);
            dispatch({type: MainTypes.searchDocument, payload: data});
        });
    }
    const searchData = async(criteria) => {
        await search(criteria).then(( response) => {
            console.log('data', response);
            dispatch({type: MainTypes.searchDocument, payload: response.result});
        });
    }
    const classes = useStyles();
    return <div className={classes.wrapper}>
        <div className={classes.container}>
            {results.map(item => (
                <ItemComponent {...item} />
            ))}
        </div>
    </div>
}
export default MainComponent;