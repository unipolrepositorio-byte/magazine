import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent/index';
import Typography from '@mui/material/Typography'
import articlesRecentService from '../../async/services/articlesRecentService';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';


const MainComponent = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery('newsArticles', () => articlesRecentService());
    const classes = useStyles();
    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }
    return <div className={classes.container}>
        <div className={classes.section}>
            {isLoading ? <p>..loading</p> : data.data.map(({ id, attributes }) => (
                <div key={id}>
                    <Typography variant="h3" >
                        ARTÍCULOS MAS RECIENTES
                    </Typography>
                    <ItemComponent props={attributes} id={id} />
                    <div className={classes.separator}>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                    </div>
                </div>
            ))}
        </div>
        <div className={classes.aside}>
            {!isLoading && <Grid className={classes.imageDesktopContainer}>
                <img src={`${data.data[0].attributes.images.data.length > 0 ?data.data[0].attributes.images.data[0].attributes.source : ''}`} />
            </Grid>}
        </div>
    </div>
}
export default MainComponent;