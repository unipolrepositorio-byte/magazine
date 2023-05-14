import { makeStyles } from "@material-ui/core";
import mq from '../../config/mq';
const useStyles = makeStyles(theme=>({
    articleContainer:{
        scrollBehavior: 'smooth',
        [mq('xxs')]:{
            padding:'0rem 0 4rem 0'
        },
        [mq('sm')]:{
            padding:'2rem 2rem'
        },
        [mq('md')]:{
            padding:'2rem 4rem'
        },
        [mq('lg')]:{
            padding:'2rem 6rem'
        },
    },

    textArea:{
        [mq('xxs')]:{
            fontSize: '0.875rem',
            margin:'15px 30px',
        },
        [mq('sm')]:{
            fontSize:'1.5rem',
            borderTop:`4px solid ${theme.palette.primary.main}`,
            margin:'15px 0px',
        },
        
        marginTop:'0',
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
        fontWeight: '400',
        
        lineHeight: '152%',
    }
}))

export default useStyles;