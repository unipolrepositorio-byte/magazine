import useStyles from './ImageCarouselComponent.styles';
import Glider from 'react-glider';
import "glider-js/glider.min.css";
import ItemCarrousel from './ItemCarrousel';
import { ReactComponent as Left } from '../../assets/image/left.svg';
import { ReactComponent as Right } from '../../assets/image/right.svg';
import data from '../../__mock__/itemsCarrousel.json';

const ImageCarousel = ({ children }) => {

    const classes = useStyles();
    return (
        <div className={classes.containerGlider}>
            <p className={classes.titleCarrousel}>VOLÚMENES</p>
            <Glider
            iconLeft={<Left className={classes.icon}/>}
            iconRight={<Right className={classes.icon}/>}
            hasArrows
            draggable
            slidesToShow={3}
            slidesToScroll={1}
            >
                {data.items.map(item=>(<ItemCarrousel item={item}/>))}
            </Glider>
        </div>
    )
}
export default ImageCarousel;