import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./volume.styles";
import portada from '../../assets/image/portada.png';
import ItemComponent from "../../components/MainComponent/itemComponent";
import { useQuery } from "react-query";
import articlesVolumeService from "../../async/services/articlesvolumeService";

export const Volume = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery('filterArticle', () => articlesVolumeService(id));
    const classes = useStyles();

    return (
        <Grid container className={classes.volumeCotainer}>
            <Grid item xs className={classes.imageMobileContainer}>
                <img src={portada} />
            </Grid>
            <Grid item xs container direction="column" alignContent='center' className={classes.bodyContainer}>
                {!isLoading ? data.data.attributes.articles.data.map(item => (
                    <Grid item key={item.id}><ItemComponent props={item.attributes} /></Grid>
                )) : <Grid item><p>...Loading</p></Grid>}
            </Grid>
            <Grid item xs={4} lg={3} className={classes.imageDesktopContainer}>
                <img src={portada} />
            </Grid>
        </Grid>
    )
}