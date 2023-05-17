import { useEffect, useState } from 'react';
import useStyles from './articlesComponent.styles';
import ItemComponent from '../MainComponent/itemComponent';
import { useQuery } from 'react-query';
import articlesService from '../../async/services/articlesService';
import searchService from '../../async/services/searchService';
import { useLocation } from 'react-router-dom';

const MainComponent = () => {
    const { state } = useLocation();
    const { data, isLoading, error } = useQuery(state ? `search${state}` : 'articles', state ? () => searchService(state) : () => articlesService());

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {!state && <>
                    <h3 variant="h3" paragraph>
                        ARTÍCULOS
                    </h3>
                    {isLoading ? <p>..loading</p> : data.data.map(({ id, attributes }) => (
                        <ItemComponent key={id} props={attributes} id={id} />
                    ))}
                </>}
                {state && <>
                    <h3 variant="h3" paragraph>
                        ARTÍCULOS
                    </h3>

                    {isLoading ? <p>..loading</p> : data.map(item => (
                        <ItemComponent key={item.id} props={item} id={item.id} />
                    ))}
                </>}
            </div>
        </div>
    );
}
export default MainComponent;