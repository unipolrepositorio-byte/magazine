import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles((theme) => ({
  
  wrapper: {
    display: 'flex',
    '& h3': {
      fontSize: '30px',
      color: theme.palette.primary.main,
      fontWeight: 800,
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
    },
    '& h4': {
      fontSize: '14px',
      color: theme.palette.neutro2.main,
      fontWeight: 800,
      textTransform: 'uppercase',
      fontFamily: 'Roboto',
    },
    '& h5': {
      fontSize: '12px',
      color: theme.palette.neutro2.main,
      fontWeight: 300,
      fontFamily: 'Lato',
      lineHeight: '136%',
      fontStyle: 'normal',
    },
    '& p': {
      fontSize: '10px',
      fontFamily: 'Lato',
      fontWeight: 275,
      lineHeight: '136%',
      textTransform: 'capitalize',
    },
    '& h5:first-letter': {
      textTransform: 'uppercase',
    },
  },
 
  content: {
    '& hr': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      height: 2,
      marginBottom: '1rem',
    },
    [mq('sm')]: {
      '& hr': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        height: 5,
        marginBottom: '1rem',
      },
    }
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    gap: 3,
    marginBottom: '2rem',
  },
  circle: {
    width: '12px',
    height: '12px',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
  },
  icons: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    paddingRight: '1rem',
  },

  [mq('sm')]: {
    wrapper: {
      display: 'flex',
      '& h3': {
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontWeight: 800,
        fontFamily: 'Montserrat',
      },
      '& h4': {
        fontSize: '32px',
        color: theme.palette.neutro2.main,
        fontWeight: 800,
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
      },
      '& h5': {
        fontSize: '24px',
        color: theme.palette.neutro2.main,
        fontWeight: 300,
        fontFamily: 'Lato',
        lineHeight: '136%',
        fontStyle: 'normal',
      },
      '& p': {
        fontSize: '14px',
        fontFamily: 'Lato',
        fontWeight: 275,
        lineHeight: '136%',
      },
      '& h5:first-letter': {
        textTransform: 'uppercase',
      },
  },
  },



}));
export default useStyles;
