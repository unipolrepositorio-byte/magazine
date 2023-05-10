import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';
const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: '2rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& h3': {
        fontSize: '30px',
        color: theme.palette.primary.main,
        fontWeight: 800,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
      },
      [mq('md')]: {
        '& h3': {
          fontSize: '60px',
          color: theme.palette.primary.main,
          fontWeight: 800,
          fontFamily: 'Montserrat-Bold',
          textTransform: 'uppercase',
        },
      },
      [mq('lg')]: {
        '& h3': {
          fontSize: '60px',
          color: theme.palette.primary.main,
          fontWeight: 800,
          fontFamily: 'Montserrat-Bold',
          textTransform: 'uppercase',
        },
      },

    }
}));

export default useStyles;
