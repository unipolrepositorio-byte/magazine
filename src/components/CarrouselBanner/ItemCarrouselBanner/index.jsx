import banner from '../../../assets/image/banner.jpg'
import useStyles from './itemCarrouselBanner.styles';

const ItemCarrouselBanner = () => {

  const classes = useStyles();
    return (
        <div >
          <img alt='alt' src={banner} className={classes.image}/>
        </div>
    )
}

export default ItemCarrouselBanner