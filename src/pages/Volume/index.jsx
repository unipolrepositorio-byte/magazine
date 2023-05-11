import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./volume.styles";
import portada from '../../assets/image/portada.png';
import ItemComponent from "../../components/MainComponent/itemComponent";

export const Volume = () => {

    const {id} = useParams();
    console.log(id);
    const data = require('../../__mock__/volume.json');
    const classes = useStyles();

    return (
        <Grid container className={classes.volumeCotainer}>
            <Grid item xs className={classes.imageMobileContainer}>
                <img src={portada}/>
            </Grid>
            <Grid item xs container direction="column" alignContent='center' className={classes.bodyContainer}>
                {data.articles.map(item=>{
                    return (<Grid item><ItemComponent props={item}/></Grid>)
                })}
            </Grid>
            <Grid item xs={4} lg={3} className={classes.imageDesktopContainer}>
                <img src={portada}/>
            </Grid>
        </Grid>
    )
}