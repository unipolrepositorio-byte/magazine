import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    itemContainer: {
        width:'80px',
        '&.glider-slide':{
            minWidth:'50px'
        }
    },
    imageContainer: {
        aspectRatio: '1 / 1.5',
        width:'80%',
        objectFit: 'fill',
        '& img':{
            height:'100%'
        }
    },
    labelDate:{
        fontFamily:'Lato-Ligth',
        [mq('xxs')]:{
            fontSize:'0.8rem',
        },
        [mq('xs')]:{
            fontSize:'0.8rem',
        },
        [mq('sm')]:{
            fontSize:'1.1rem',
        },
        [mq('md')]:{
            fontSize:'1.8rem',
            fontWeight:'normal',
        },
        [mq('lg')]:{
            fontSize:'2.8rem'
        }
    },
    labelTitle: {
        color:theme.palette.primary.main,
        fontWeight:'bolder',
        [mq('xxs')]:{
            fontSize:'1rem'
        },
        [mq('sm')]:{
            fontSize:'1.3rem'
        },
        [mq('md')]:{
            fontSize:'2rem'
        },
        [mq('lg')]:{
            fontSize:'3rem'
        }
    }
}));
export default useStyles;