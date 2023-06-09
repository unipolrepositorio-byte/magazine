import useStyles from './ItemCarrousel.styles';
import { dateFormat } from '../../../utilities/dateFormat';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import getEnvVariables from '../../../config/config';

const ItemCarrousel = ({ item, idVolume }) => {
    const { strapiServer } = getEnvVariables();
    const URL_IMAGE = `${strapiServer}:1337${item.portrait.data.attributes.url}`
    const navigate = useNavigate();
    const goToVolume = (id, volume, date, imageVolume, idVol) => {
        const dateVolume = new Date(`${date}T00:00:00`).toLocaleDateString('en-us',
            {
                year: "numeric",
                month: "short",
                day: 'numeric',
            })
        navigate(`/volumes/volume/${id}`, { state: { dateVolume, volume, imageVolume, idVol } })
    }
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center" className={classes.itemContainer} onClick={() => goToVolume(idVolume, item?.title, item?.date, item?.portrait?.data?.attributes?.url, item?.year_volume?.data?.id)} >
            <Grid className={classes.imageContainer}>
                <img src={URL_IMAGE} alt='alt' />
            </Grid>
            <Grid>
                <label className={classes.labelDate}>{dateFormat(item.date)}</label>
            </Grid>
            <Grid>
                <label className={classes.labelTitle}>{item.title}</label>
            </Grid>
        </Grid>
    )
}

export default ItemCarrousel