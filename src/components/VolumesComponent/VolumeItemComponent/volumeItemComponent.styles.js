import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';
const useStyles = makeStyles((theme) => ({

  wrapperDesktop: {
    display: 'none',
  },
  wrapperMobile: {
    display: 'block',
  },
  [mq('lg')]: {
    wrapperDesktop: {
      display: 'block',
    },
    wrapperMobile: {
      display: 'none',
    }
  },
  container: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    '& h5': {
      fontSize: '15px',
      color: theme.palette.neutro2.main,
      fontFamily: 'Lato-Ligth',
      fontStyle: 'normal',
    },
    '& h4': {
      fontSize: '20px',
      color: theme.palette.primary.main,
      fontFamily: 'Roboto-bold',
      fontStyle: 'normal',
    },
    [mq('md')]: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      '& h5': {
        fontSize: '26px',
        color: theme.palette.neutro2.main,
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
      },
      '& h4': {
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontFamily: 'Roboto-bold',
        fontStyle: 'normal',
      },
    },
    [mq('lg')]: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      '& h5': {
        fontSize: '26px',
        color: theme.palette.neutro2.main,
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
      },
      '& h4': {
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontFamily: 'Roboto-bold',
        fontStyle: 'normal',
      },
    },
  },
}));

export default useStyles;
