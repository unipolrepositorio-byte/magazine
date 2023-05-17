import useStyles from './ItemCarrousel.styles';
import logo from '../../../assets/image/portada.png';
import { dateFormat } from '../../../utilities/dateFormat';

import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const ItemCarrousel = ({ item, idVolume }) => {
    const URL_IMAGE = `http://revista.repositoriounipol.com:1337${item.portrait.data.attributes.url}`
    const navigate = useNavigate();
    const goToVolume = (id, volume, date, imageVolume) => {
        const dateVolume = new Date(`${date}T00:00:00`).toLocaleDateString('en-us',
            {
                year: "numeric",
                month: "short",
                day: 'numeric',
            })
        navigate(`/volumes/volume/${id}`, { state: { dateVolume, volume, imageVolume } });
    }
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center" className={classes.itemContainer} onClick={() => goToVolume(idVolume, item.title, item.date, item.portrait.data.attributes.url)} >
            <Grid item className={classes.imageContainer}>
                <img src={URL_IMAGE} alt='alt' />
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