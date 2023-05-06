import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    [mq('sm')]:{
      borderBottom: `10px solid ${theme.palette.secondary.main}`,
      height: '18.5rem',
    }
  },
  collapse: {
    width: '100%'
  },
  tittleArea: {
    [mq('xxs')]:{
      background: theme.palette.primary.main,
      borderBottom: `10px solid ${theme.palette.secondary.main}`,
      height:'50px',
    },
    [mq('sm')]:{
      background: 'transparent',
      borderBottom: `10px solid transparent`,
      position:'relative',
      zIndex:'1'
    },
    [mq('md')]:{
      height:'4rem',
    },
    [mq('lg')]:{
      height:'5rem',
    },
    [mq('xl')]:{
      height:'4.6rem',
    }
  },
  searchMovile: {
    width: '100%',
  },
  searcheDesktop: {
    display: 'none',
  },
  [mq('sm')]:{
    searchMovile: {
      display: 'none',   
    },
    searcheDesktop: {
      display: 'flex',
    },
  },
  logoContainer:{
    background: theme.palette.neutro1.main,
    height:'100%',
    [mq('xxs')]:{
      borderRadius: '0rem 1rem 1rem 0rem / 0rem 50% 50% 0rem',
      paddingRight: '1rem',
    },
    [mq('sm')]:{
      borderRadius: '0rem 0rem 1rem 0rem / 0rem 0% 50% 0rem',
    },
    [mq('md')]:{
      paddingRight: '1.5rem',
      borderRadius: '0rem 0rem 1.5rem 0rem / 0rem 0% 50% 0rem',
    },
    [mq('lg')]:{
      paddingRight: '1.7rem',
      borderRadius: '0rem 0rem 1.7rem 0rem / 0rem 0% 50% 0rem',
    },
    [mq('xl')]:{
      paddingRight: '2rem',
      borderRadius: '0rem 0rem 2rem 0rem / 0rem 0% 50% 0rem',
    }
  },
  logo:{
    height:'100%',
  },
  imageAreaMobile:{
    width:'100%',
    [mq('xxs')]:{
      display:'block'
    },
    [mq('sm')]:{
      display:'none'
    },
    height:'12rem'
  },
  imageAreaDesktop:{
    position:'relative',
    [mq('xxs')]:{
      display:'none'
    },
    [mq('sm')]:{
      display:'block',
      top:'-50px'
    },
    [mq('md')]:{
      display:'block',
      top:'-4rem'
    },
    [mq('lg')]:{
      display:'block',
      top:'-5rem'
    },
    [mq('xl')]:{
      display:'block',
      top:'-4.6rem'
    },
  },
  image:{
    filter: 'brightness(40%)',
    width: '100%',
    objectFit: 'cover',
    [mq('xxs')]:{
        height: '12rem',
    },
    [mq('sm')]:{
        height: 'calc(18.5rem - 10px)',
    }
  }
}));

export default useStyles;
