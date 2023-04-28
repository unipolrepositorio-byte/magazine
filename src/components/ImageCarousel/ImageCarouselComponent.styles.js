import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';


const useStyles = makeStyles((theme) => ({
  containerGlider: {
    width: '80%',
    margin: '0 auto',
    '& .glider-contain':{
      '& .glider-prev':{
        [mq('xxs')]:{
          left:'-25px'
        },
        [mq('xs')]:{
          left:'-30px'
        },
        [mq('sm')]:{
          left:'-50px'
        }
      },
      '& .glider-next':{
        [mq('xxs')]:{
          right:'-25px'
        },
        [mq('xs')]:{
          right:'-30px'
        },
        [mq('sm')]:{
          right:'-50px'
        }
      }
    }
  },
  titleCarrousel:{
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontWeight: 'bolder',
    [mq('xxs')]:{
      fontSize:'1.2rem'
    },
    [mq('xs')]:{
      fontSize:'1.6rem'
    },
    [mq('sm')]:{
      fontSize:'3rem'
    },
    margin:'15px 0'
  },
  gliderContainer:{
    '&.glider-contain':{
      background:'red',
    },
    '&button':{
      '&.glider-prev':{
        top:'40%'
      }
    }
  },
  icon:{
    [mq('xxs')]:{
      width:'25px',
      height:'25px'
    },
    [mq('xs')]:{
      width:'30px',
      height:'30px'
    },
    [mq('sm')]:{
      width:'50px',
      height:'50px'
    }
  }
}
));

export default useStyles;
