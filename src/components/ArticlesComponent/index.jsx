import { useEffect, useState } from 'react';
import useStyles from './articlesComponent.styles';
import ItemComponent from '../MainComponent/itemComponent';
import { useQuery } from 'react-query';
import queryString from 'query-string';
import articlesService from '../../async/services/articlesService';


const MainComponent = () => {
    const { data, isLoading, error } = useQuery('search', () => articlesService());
    console.log('get data ->', data);

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h3 variant="h3" paragraph>
                    ARTÍCULOS
                </h3>
                {isLoading ? <p>..loading</p> : data.data.map(({attributes}) => (
                    <ItemComponent props={attributes} />
                ))}
            </div>
        </div>
    );
}
export default MainComponent;