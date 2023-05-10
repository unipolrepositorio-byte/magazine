import { useEffect, useState } from 'react';
import useStyles from './articlesComponent.styles';
import ItemComponent from '../MainComponent/itemComponent';
import { useQuery } from 'react-query';
import queryString from 'query-string';
import articlesService from '../../async/services/articlesService';


const MainComponent = () => {
    const { data, isLoading, error } = useQuery('articles', () => articlesService());

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h3 variant="h3" paragraph>
                    ARTÍCULOS
                </h3>
                {isLoading ? <p>..loading</p> : data.data.map(({ id, attributes }) => (
                    <ItemComponent props={attributes} id={id} />
                ))}
            </div>
        </div>
    );
}
export default MainComponent;