import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';

import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent';
import articlesRecentService from '../../async/services/articlesRecentService';
import { getLastVolume } from '../../async/services/volumesService';
import getEnvVariables from '../../config/config';

const MainComponent = () => {
  const classes = useStyles();
  const { strapiServer } = getEnvVariables();

  // Queries
  const {
    data: articlesData,
    isLoading: isArticlesLoading,
    isError: isArticlesError,
    error: articlesError,
  } = useQuery('newsArticles', articlesRecentService);

  const {
    data: volumeData,
    isLoading: isVolumeLoading,
  } = useQuery('getLastVolume', getLastVolume);

  const articles = articlesData?.data[0]?.attributes?.articles?.data || [];

  const portrait = volumeData?.data?.[0]?.attributes?.portrait?.data;
  const formats = portrait?.attributes?.formats;
  const originalUrl = portrait?.attributes?.url;

  const getBestImage = (formats) => {
    if (!formats) return originalUrl;
    return (
      formats.large?.url ||
      formats.medium?.url ||
      formats.small?.url ||
      formats.thumbnail?.url ||
      originalUrl
    );
  };

  if (isArticlesError) {
    return <div>Error al obtener los datos: {articlesError.message}</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Typography variant="h3">ARTÍCULOS MÁS RECIENTES</Typography>

        {isArticlesLoading ? (
          <p>Cargando artículos...</p>
        ) : (
          articles.map(({ id, attributes }) => (
            <div key={id}>
              <ItemComponent props={attributes} id={id} />
              <div className={classes.separator}>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
                <div className={classes.circle}></div>
              </div>
            </div>
          ))
        )}
      </div>

      {!isVolumeLoading && portrait && (
        <div className={classes.aside}>
          <Grid className={classes.imageDesktopContainer}>
            <img src={`${strapiServer}${getBestImage(formats)}`} alt="Portada del volumen" />
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MainComponent;