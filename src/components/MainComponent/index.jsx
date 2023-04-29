import { useEffect } from 'react';
import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent/index';
import article from '../../__mock__/article.json';
import Typography from '@mui/material/Typography'
import useFetch from '../../hooks/useFetch';

const NUMBER_OF_ARTICLES = 2

const MainComponent = ({ children }) => {
    const { data, isLoading, getData, setIsLoading } = useFetch();
    useEffect(() => {
        getData(NUMBER_OF_ARTICLES);
    }, [isLoading])

    const classes = useStyles();
    return <div className={classes.container}>
        {children}

        {isLoading ? <p>..loading</p> : data.map(article => (
            <>
                <Typography variant="h3" >
                    ARTÍCULOS MAS RECIENTES
                </Typography>
                <ItemComponent props={article} />
                <div className={classes.separator}>
                    <div className={classes.circle}></div>
                    <div className={classes.circle}></div>
                    <div className={classes.circle}></div>
                </div>
            </>
        ))}
    </div>
}
export default MainComponent;