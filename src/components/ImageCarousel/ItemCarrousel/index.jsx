import useStyles from './ItemCarrousel.styles';
import logo from '../../../assets/image/portada.png';
import { dateFormat } from '../../../utilities/dateFormat';

import { Grid } from '@material-ui/core';


const ItemCarrousel = ({item}) => {


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