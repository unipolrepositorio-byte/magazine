import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',

        padding: '1rem',
        [mq('xxs')]: {
            width: '20rem'
        },
        [mq('xs')]: {
            width: '24rem'
        },
        [mq('sm')]: {
            width: '45rem'
        },
        [mq('md')]: {
            width: '60rem',
        },
        marginBottom: '2rem'
    },
    content: {
        [mq('xxs')]: {
            width: '100%'
        },
        [mq('xs')]: {
            width: '100%'
        },
        [mq('sm')]: {
            width: '70%'
        },
        [mq('md')]: {
            width: '80%',
        },
        '& h2': {
            fontSize: '15px',
            margin: '0px',
            color: theme.palette.primary.main,
            '& b': {
                color: '#ff0000'
            }
        },
        '& h3': {
            margin: '0px',
            display: 'inline-block',
            marginRight: '10px',
            color: theme.palette.secondary.main,
        },
        '& p': {
            display: 'inline-block',
            '& b': {
                color: '#ff0000'
            }
        }
    },
    portrait: {
        
        [mq('xxs')]: {
            display: 'none'
        },
        [mq('xs')]: {
            display: 'none'
        },
        [mq('sm')]: {
            display: 'block',
            width: '30%'
        },
        [mq('md')]: {
            display: 'block',
            width: '20%',
        }
    }
}));
export default useStyles;