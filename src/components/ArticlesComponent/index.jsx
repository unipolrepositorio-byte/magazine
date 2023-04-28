import { useEffect } from 'react';
import useStyles from './articlesComponent.styles';
import useFetch from '../../hooks/useFetch';
import { logDOM } from '@testing-library/react';


const MainComponent = ({ children }) => {
    const { data, isLoading, getData, setIsLoading } = useFetch();
    useEffect(() => {
        getData();
    }, [isLoading])

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h2>ARTÍCULOS</h2>
            {isLoading ? <p>..loading</p> : data.map(article => (
                <h5 key={article.id} >
                    {article.title}
                </h5>
            ))}
        </div>
    );
}
export default MainComponent;