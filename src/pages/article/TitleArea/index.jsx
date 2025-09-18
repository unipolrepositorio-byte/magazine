import { Grid } from "@mui/material";
import { autorsFormat } from "../../../utilities/autorsFormat";
import { dateFormat } from "../../../utilities/dateFormat";
import { volumeInfoFormat } from "../../../utilities/volumeInfoFormat";
import { useStyles } from "./titleArea.styles";
import { Typography } from "@material-ui/core";

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
                <Typography variant="h6">
                    {autors.length > 1 ? 'Autores' : 'Autor'}:
                </Typography>
                    <ul>
                    {autors.map(item => (
                        <li key={item.id}>{item.attributes.fullName} </li>
                    ))}
                    </ul>
            </Grid>
            <Grid item className={classes.volumeInfo}>
                <label>{volumeInfoFormat(volume)}</label>
            </Grid>
        </Grid>
            
    )
}