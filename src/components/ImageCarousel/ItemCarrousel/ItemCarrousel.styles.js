import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    itemContainer: {
        width:'5rem',
        '&.glider-slide':{
            minWidth:'50px'
        }
    },
    imageContainer: {
        aspectRatio: '1 / 1.5',
        width:'80%',
        maxWidth:'400px',
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
            fontSize:'1.3rem',
        },
        [mq('lg')]:{
            fontSize:'1.5rem'
        }
    },
    labelTitle: {
        color:theme.palette.primary.main,
        fontWeight:'bolder',
        [mq('xxs')]:{
            fontSize:'1rem'
        },
        [mq('sm')]:{
            fontSize:'1.2rem'
        },
        [mq('md')]:{
            fontSize:'1.4rem'
        },
        [mq('lg')]:{
            fontSize:'1.6rem'
        }
    }
}));
export default useStyles;