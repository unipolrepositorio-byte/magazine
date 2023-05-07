import { Grid, Typography } from "@mui/material";
import { autorsFormat } from "../../../utilities/autorsFormat";
import { dateFormat } from "../../../utilities/dateFormat";
import { useStyles } from "./titleArea.styles";

export const TitleArea = ({date, title, autors}) => {

    const classes = useStyles();

    return(
        <Grid container direction='column'>
            <Grid item className={classes.date}>
                    <label>{dateFormat(date)}</label>
            </Grid>
            <Grid item className={classes.title}>
                    <label>{title}</label>
            </Grid>
            <Grid item className={classes.autors}>
                    <label>{autorsFormat(autors)}</label>
            </Grid>
            <Grid item className={classes.volumeInfo}>
                <label>Abril 16 2023 | Vol.2 | No 1 </label>
            </Grid>
        </Grid>
            
    )
}