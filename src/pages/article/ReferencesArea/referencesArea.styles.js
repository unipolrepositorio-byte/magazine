import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq'
export const useStyles = makeStyles(theme => ({
    title:{
        [mq('xxs')]:{
            fontSize: '1rem',
        },
        [mq('sm')]:{
            fontSize:'2rem',
        },
        paddingLeft:'2rem',
        fontFamily: 'Lato-ligth',
        fontWeight:'700',
        
    },
    container: {
        [mq('xxs')]:{
            fontSize: '0.875rem',
            padding:'0 2rem',
        },
        [mq('sm')]:{
            fontSize:'1.5rem',
            padding:'0 5rem',
        },
        marginTop:'1rem',
        
        fontFamily: 'Lato-ligth',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '152%',
        '& a':{
            color:theme.palette.neutro2.main,
            '& :hover':{
                cursor:'pointer'
            }
        }
    },
    indexReference: {
        [mq('xxs')]:{
            border:`1px solid ${theme.palette.primary.main}`,
            fontSize: '0.875rem',
            width:'14px',
            height:'14px',
            fontSize:'13px',
            left:'-15px',
        },
        [mq('sm')]:{
            border:`2px solid ${theme.palette.primary.main}`,
            fontSize:'1.5rem',
            width:'68px',
            height:'68px',
            fontSize:'2rem',
            left:'-4.3rem',
        },
        border:`1px solid ${theme.palette.primary.main}`,
        
        
        placeContent:'center',
        display:'grid',
        color:theme.palette.primary.main,
        position:'absolute',
        
        top:'7px'
    }
}))