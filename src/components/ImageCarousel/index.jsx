import useStyles from './ImageCarouselComponent.styles';
import Glider from 'react-glider';
import "glider-js/glider.min.css";
import ItemCarrousel from './ItemCarrousel';
import { ReactComponent as Left } from '../../assets/image/left.svg';
import { ReactComponent as Right } from '../../assets/image/right.svg';
import volumesService from '../../async/services/volumesService';
import { useQuery } from 'react-query';

const ImageCarousel = ({ children }) => {
    const { data, isLoading, isError, error } = useQuery('volumesCarrusel', () => volumesService());
    const classes = useStyles();
    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }
    return (
        <div className={classes.containerGlider}>
            <p className={classes.titleCarrousel}>VOLÚMENES</p>
            <Glider
                iconLeft={<Left className={classes.icon} />}
                iconRight={<Right className={classes.icon} />}
                hasArrows
                draggable
                slidesToShow={3}
                slidesToScroll={1}
            >
                {isLoading ? <p>..loading</p> : data.data.map(({ attributes, id }) => (
                    <>
                        <ItemCarrousel item={attributes} idVolume={id} />
                    </>

                ))}
            </Glider>
        </div>
    )
}
export default ImageCarousel;