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
}));

export default useStyles;
