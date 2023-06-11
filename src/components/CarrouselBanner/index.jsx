import { useState, useRef, useCallback, useEffect } from 'react';
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ItemCarrouselBanner from './ItemCarrouselBanner';
import useStyles from './carrouselBanner.styles';
import mainBanner from '../../assets/image/mainBanner.jpeg';


const CarrouselBanner = ({id}) => {


    const INTERVAL = 5000;
    const ITEMS = 7;

    const [isDragging, setIsDragging] = useState(false);
    const intervalRef = useRef(null);

    const gliderRef = useRef(null);
    const classes = useStyles();

    const callbackRef = useCallback((glider) => {
        if (glider) {
          gliderRef.current = glider;
          if (!intervalRef.current && !isDragging) {
            intervalRef.current = setInterval(() => {
              let index = glider.page;
              if (index < ITEMS) {
                index += 1;
              } else {
                index = 0;
              }
              glider.scrollItem(index, false);
            }, INTERVAL);
          }
        }
      }, [intervalRef, isDragging]);

    useEffect(
        () => {
            return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }}
        },
        [intervalRef]
    );

    useEffect(
      ()=>{

          const instance = document.getElementById(id);

          instance.addEventListener('touchstart',touchStart);
          instance.addEventListener('touchend',touchEnd);
          instance.addEventListener('mousedown',touchStart);
          instance.addEventListener('mouseup',touchEnd);

          return () => {

            instance.removeEventListener('touchstart',touchStart);
            instance.removeEventListener('touchend',touchEnd);
            instance.removeEventListener('mousedown',touchStart);
            instance.removeEventListener('mouseup',touchEnd);
          }
      },[]
    )
    const touchStart = () => {
        setIsDragging(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const touchEnd = useCallback(() => {
        setIsDragging(false);
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            let index = gliderRef.current.page;
            if (index < ITEMS) {
              index += 1;
            } else {
              index = 0;
            }
            gliderRef.current.scrollItem(index, false);
          }, INTERVAL);
        }
      }, [intervalRef]);

    return (
        <Glider id={id} slidesToShow={1} className={classes.gliderContainer} hasArrows={true} draggable ref={callbackRef} >
            <ItemCarrouselBanner image={mainBanner}/>
            <ItemCarrouselBanner image={mainBanner}/>
            <ItemCarrouselBanner image={mainBanner}/>
        </Glider>
    )
}

export default CarrouselBanner