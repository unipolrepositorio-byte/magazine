import { Grid } from "@material-ui/core";
import { useLocation, useParams } from "react-router-dom";
import useStyles from "./volume.styles";
import ItemComponent from "../../components/MainComponent/itemComponent";
import { useQuery } from "react-query";
import articlesVolumeService from "../../async/services/articlesvolumeService";

export const Volume = () => {
    const { state } = useLocation();
    const { imageVolume } = state;
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery('filterArticle', () => articlesVolumeService(id));
    const classes = useStyles();

    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }

    return (
        <Grid container className={classes.volumeCotainer}>
            <Grid item xs className={classes.imageMobileContainer}>
                <img src={`${process.env.REACT_APP_STRAPI_SERVER}:1337${imageVolume}`} />
            </Grid>
            <Grid item xs container direction="column" alignContent='center' className={classes.bodyContainer}>
                {!isLoading ? data.data.attributes.articles.data.map(item => (
                    <Grid item key={item.id}><ItemComponent props={item.attributes} id={item.id} /></Grid>
                )) : <Grid item><p>...Loading</p></Grid>}
            </Grid>
            <Grid item xs={4} lg={3} className={classes.imageDesktopContainer}>
                <img src={`${process.env.REACT_APP_STRAPI_SERVER}:1337${imageVolume}`} />
            </Grid>
        </Grid>
    )
}