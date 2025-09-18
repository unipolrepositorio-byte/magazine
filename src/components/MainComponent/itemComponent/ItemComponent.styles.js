import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '& h2': {
      fontSize: '24px',
      color: theme.palette.neutro2.main,
      textTransform: 'uppercase',
      fontFamily: 'Roboto-Bold',
      cursor: 'pointer',
      transition: '.5s all ease',
      '&:hover': {
        background: '#EEEEEE',
        transition: '.5s all ease'
      }
    },
    '& h5': {
      fontSize: '14px',
      color: theme.palette.neutro2.main,
      fontFamily: 'Lato-Ligth',
      fontStyle: 'normal',
    },
    '& p': {
      fontSize: '16px',
      fontFamily: 'Lato-Ligth',
      marginTop: '2px',
      lineHeight: '176%',
    },
    '& h5:first-letter': {
      textTransform: 'uppercase',
    },
  },
  [mq('sm')]: {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',

      '& h4': {
        fontSize: '32px',
        color: theme.palette.neutro2.main,
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Bold',
      },
      '& h5': {
        fontSize: '24px',
        color: theme.palette.neutro2.main,
        fontWeight: 300,
        fontFamily: 'Lato-Ligth',
        lineHeight: '136%',
        fontStyle: 'normal',
      },
      '& p': {
        fontSize: '18px',
        fontFamily: 'Lato-Ligth',
        fontWeight: 275,
        lineHeight: '176%',
      },
      '& h5:first-letter': {
        textTransform: 'uppercase',
      },
    },
  },

  content: {
    '& hr': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      height: 2,
      marginTop: '0rem',
      marginBottom: '1rem',
    },
    [mq('sm')]: {
      '& hr': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        height: 5,
        marginTop: '2rem',
        marginBottom: '1rem',

      },
    }
  },



}));
export default useStyles;