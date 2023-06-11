import banner from '../../../assets/image/banner.jpg'
import useStyles from './itemCarrouselBanner.styles';

const ItemCarrouselBanner = ({image}) => {

  const classes = useStyles();
    return (
        <div >
          <img alt='alt' src={image} className={classes.image}/>
        </div>
    )
}

export default ItemCarrouselBanner