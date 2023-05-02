import { makeStyles } from '@material-ui/core';
import mq from '../../../../config/mq';

const useStyles = makeStyles( theme => ({
  box: {
    display: 'flex', 
    width: '1.8rem',
    flexDirection: 'column', 
    backgroundColor: theme.palette.secondary.main, 
    paddingTop: '0.5rem',
    paddingBottom: '1rem',
    gap: 10,
    [mq('md')]: {
      display: 'flex', 
      width: '3rem',
      flexDirection: 'column', 
      backgroundColor: theme.palette.secondary.main, 
      paddingTop: '0.5rem',
      paddingBottom: '1rem',
      gap: 18,
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    paddingRight: '1rem',
    gap: 10,
    marginTop: '-1.5rem',
    '& img': {
      width: '1rem',
    },
    [mq('md')]: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'end',
      paddingRight: '1rem',
      gap: 18,
      marginTop: '0rem',
      '& img': {
        width: '1.7rem',
      },
    },
  },

}));
export default useStyles;
