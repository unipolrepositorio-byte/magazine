import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

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
        },
        '& h3': {
            margin: '0px',
            display: 'inline-block',
            marginRight: '10px',
            color: theme.palette.secondary.main,
        },
        '& p': {
            display: 'inline-block',
        }
    },
    portrait: {
        display: 'flex',
        flexDirection: 'column',
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
    },
    download: {
        [mq('xxs')]: {
            display: 'block'
        },
        [mq('xs')]: {
            display: 'block'
        },
        [mq('sm')]: {
            display: 'none',
        },
        [mq('md')]: {
            display: 'none',
        }
    }
}));
export default useStyles;