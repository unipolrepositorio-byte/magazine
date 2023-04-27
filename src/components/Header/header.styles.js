import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'grid',
        background: theme.palette.neutro2.main,
        height: '10rem',
    },
    container: {
        color: theme.palette.primary.main,
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        [mq('xxs')]: {
            minWidth: '20rem'
        },
        [mq('md')]: {
            minWidth: '60rem',
        },
    },
    logo: {
        [mq('xxs')]: {
            '& img': {
                marginTop: '10px',
                width: '90%',
            }
        },
        [mq('md')]: {
            '& img': {
                width: '50%'
            }
        },
    },
    items: {
        marginTop: '2rem',
        '& b': {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& a' : {
            color: theme.palette.primary.main,
        }
    },
    h1: {
        color: theme.palette.fourth.main,
        marginLeft: '1rem'
    }
}));
export default useStyles;