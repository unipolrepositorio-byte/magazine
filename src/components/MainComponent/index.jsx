import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent/index';
import Typography from '@mui/material/Typography'
import articlesRecentService from '../../async/services/articlesRecentService';
import { getLastVolume } from '../../async/services/volumesService';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import getEnvVariables from '../../config/config';


const MainComponent = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery('newsArticles', () => articlesRecentService());
    const { data: imageData } = useQuery('getLastVolume', () => getLastVolume());
    const { strapiServer, strapiServerPort } = getEnvVariables();
    const classes = useStyles();
    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }
    return <div className={classes.container}>
        <div className={classes.section}>
            <Typography variant="h3" >
                ARTÍCULOS MAS RECIENTES
            </Typography>
            {isLoading ? <p>..loading</p> : data.data.map(({ id, attributes }) => (
                <div key={id}>
                    
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
                <img src={`${strapiServer}:${strapiServerPort}${imageData.data[0].attributes?.portrait?.data?.attributes?.formats?.large?.url}`} />
            </Grid>}
        </div>
    </div>
}
export default MainComponent;