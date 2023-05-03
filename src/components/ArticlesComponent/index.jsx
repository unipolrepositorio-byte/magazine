import { useEffect } from 'react';
import useStyles from './articlesComponent.styles';
import useFetch from '../../hooks/useFetch';
import ItemComponent from '../MainComponent/itemComponent';
import Typography from '@mui/material/Typography'


const MainComponent = ({ children }) => {
    const { data, isLoading, getData, setIsLoading } = useFetch();
    useEffect(() => {
        getData();
    }, [isLoading])

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h3 variant="h3" paragraph>
                    ARTÍCULOS
                </h3>
                {isLoading ? <p>..loading</p> : data.map(article => (
                    <ItemComponent props={article} />
                ))}
            </div>
        </div>
    );
}
export default MainComponent;