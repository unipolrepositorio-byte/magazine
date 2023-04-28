import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';
const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    flex: 0.7,
    [mq('md')]: {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      display: 'flex',
    },
  },
}));

export default useStyles;

