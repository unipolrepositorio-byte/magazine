import useStyles from './ItemCarrousel.styles';
import logo from '../../../assets/image/portada.png';

import { Grid } from '@material-ui/core';


const ItemCarrousel = ({item}) => {

    const dateFormat = (dateString) => {
        var date = new Date(dateString);
        var optionMonth = {month: 'long'};
        var optionDay = {day: 'numeric'};
        var optionYear = {year: 'numeric'};

        var month = date.toLocaleDateString('es-Es', optionMonth);
        month = month[0].toUpperCase()+month.slice(1);
        var day = date.toLocaleDateString('es-Es', optionDay);
        var year = date.toLocaleDateString('es-Es', optionYear).slice(2);

        const finalDate = `${month} ${day} | ${year}`;
        return finalDate
    }

    const classes = useStyles();
    return (
            <Grid container direction="column" alignItems="center" className={classes.itemContainer}>
                <Grid item className={classes.imageContainer}>
                    <img src={logo} alt='alt'/>
                </Grid>
                <Grid item>
                    <label item className={classes.labelDate}>{dateFormat(item.date)}</label>
                </Grid>
                <Grid>
                    <label item className={classes.labelTitle}>{item.title}</label>
                </Grid>
            </Grid>
    )
}

export default ItemCarrousel