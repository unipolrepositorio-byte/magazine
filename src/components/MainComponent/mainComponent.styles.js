import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    margin: '3rem',
    [mq('md')]: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: '8rem 2rem 0 2rem',
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

imageDesktopContainer:{
  [mq('xxs')]:{
    display:'flex',
    justifyContent:'center',
  },
  [mq('sm')]:{
    display:'flex',
    justifyContent:'center',
  },
  [mq('md')]:{
    display:'flex',
    justifyContent:'center'
  },
  [mq('lg')]:{
      justifyContent:'flex-start',
      marginTop: '1.5rem',
  },
  
  '& img':{
      fitContent:'cover',
      aspectRatio:'3/4',
      [mq('xxs')]:{
        height:'15rem'
      },
      [mq('sm')]:{
        height:'15rem'
      },
      [mq('md')]:{
        height:'20rem'
      },
      [mq('lg')]:{
        height:'25rem'
      },
  }
},
section: {
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
  justifyContent: 'center',
  maxWidth: '57rem',
  [mq('md')]: {
    backgroundSize: 'cover',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 8,
    '& h3': {
      fontSize: '36px',
      color: theme.palette.primary.main,
      fontWeight: 800,
      fontFamily: 'Montserrat-Bold',
      textTransform: 'uppercase',
    },
  },
},
aside: {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  [mq('md')]: {
    display: 'flex',
    margin: '2rem',
    justifyContent: 'center'
  }
}
}));

export default useStyles;

