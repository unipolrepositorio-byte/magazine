import { Grid } from "@mui/material";
import { autorsFormat } from "../../../utilities/autorsFormat";
import { dateFormat } from "../../../utilities/dateFormat";
import { volumeInfoFormat } from "../../../utilities/volumeInfoFormat";
import { useStyles } from "./titleArea.styles";

export const TitleArea = ({date, title, autors, volume}) => {

    const autorNames=[];
    autors.map(item=>{
        autorNames.push(item.attributes.fullName)
    })

    const classes = useStyles();

    return(
        <Grid container direction='column' className={classes.container}>
            <Grid item className={classes.date}>
                    <label>{dateFormat(date)}</label>
            </Grid>
            <Grid item className={classes.title}>
                    <label>{title}</label>
            </Grid>
            <Grid item className={classes.autors}>
                    <label>{autorsFormat(autorNames)}</label>
            </Grid>
            <Grid item className={classes.volumeInfo}>
                <label>{volumeInfoFormat(volume)}</label>
            </Grid>
        </Grid>
            
    )
}