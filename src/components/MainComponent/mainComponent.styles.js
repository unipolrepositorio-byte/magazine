import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';
const useStyles = makeStyles(theme => ({
  container: {
    '& h3': {
      fontSize: '30px',
      color: theme.palette.primary.main,
      fontWeight: 800,
      fontFamily: 'Montserrat-Bold',
      textTransform: 'uppercase',
    },
    height: '100%',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '57rem',
    flex: 0.7,
    [mq('md')]: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      display: 'flex',
      '& h3': {
        fontSize: '36px',
        color: theme.palette.primary.main,
        fontWeight: 800,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
      },
    },
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
}));

export default useStyles;

