import { makeStyles } from "@material-ui/core";
import mq from '../../config/mq';


const useStyles = makeStyles(theme=>({
    volumeCotainer:{
        marginTop: '1rem',
        marginBottom: '3rem',
        [mq('xxs')]:{
            flexDirection: 'column'
        },
        [mq('sm')]:{
            flexDirection: 'row',
            padding:'1rem 2rem'
        }
    },
    imageMobileContainer:{
        [mq('xxs')]:{
            display:'flex',
        },
        [mq('sm')]:{
            display:'none',
        },
        justifyContent:'center',
        '& img':{
            fitContent:'cover',
            aspectRatio:'3/4',
            height:'12rem'
            
        }
    },
    imageDesktopContainer:{
        [mq('xxs')]:{
            display:'none',
            justifyContent:'center',
        },
        [mq('sm')]:{
            display:'flex', 
        },
        [mq('lg')]:{
            justifyContent:'flex-start', 
        },
        
        '& img':{
            fitContent:'cover',
            aspectRatio:'3/4',
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
    bodyContainer:{
    }
}))

export default useStyles;