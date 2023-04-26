import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq'
const useStyles = makeStyles(theme => ({
  container: {
    padding: '2rem',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    [mq('md')]: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
}));

export default useStyles;
