import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';
const useStyles = makeStyles(theme => ({

  wrapper:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    '& h3': {
      marginTop: '3rem',
      marginBottom: '0.2rem',
      fontSize: '30px',
      color: theme.palette.primary.main,
      fontWeight: 800,
      fontFamily: 'Montserrat-Bold',
      textTransform: 'uppercase',
    },

    [mq('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '60rem',
      '& h3': {
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontWeight: 800,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
      },
    },
  },
}));

export default useStyles;
