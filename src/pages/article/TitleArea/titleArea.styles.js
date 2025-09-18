import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        padding: '1rem 2rem'
    },
    date: {
        [mq('xxs')]: {
            fontSize: '0.75rem',
        },
        [mq('sm')]: {
            fontSize: '1rem',
        },
        fontFamily: 'Lato-Ligth',

        fontWeight: '275',
        lineHeight: '136%',
    },
    title: {
        [mq('xxs')]: {
            fontSize: '1.4rem',
        },
        [mq('sm')]: {
            fontSize: '2rem',
        },
        fontFamily: 'Roboto-bold',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: '139.69%',
    },
    autors: {
        [mq('xxs')]: {
            fontSize: '1.1rem',
        },
        [mq('sm')]: {
            fontSize: '1.3rem',
        },
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
        fontWeight: '275',
        lineHeight: '136%',
    },
    volumeInfo: {
        [mq('xxs')]: {
            display: 'none'
        },
        [mq('sm')]: {
            display: 'inline'
        },
        fontFamily: 'Roboto-bold',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '1.5rem',
        lineHeight: '28px',
    }
}))