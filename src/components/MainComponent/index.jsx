import { useEffect } from 'react';
import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent/index';
import Typography from '@mui/material/Typography'
import articlesRecentService from '../../async/services/articlesRecentService';
import { useQuery } from 'react-query';

const NUMBER_OF_ARTICLES = 2

const MainComponent = ({ children }) => {
    const { data, isLoading, error } = useQuery('newsArticles', () => articlesRecentService());

    const classes = useStyles();
    console.log(data);
    return <div className={classes.container}>
        {children}

        {isLoading ? <p>..loading</p> : data.data.map(({ attributes }) => (
            <>
                <Typography variant="h3" >
                    ARTÍCULOS MAS RECIENTES
                </Typography>
                <ItemComponent props={attributes} />
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