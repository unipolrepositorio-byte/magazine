import { makeStyles } from "@material-ui/core";
import mq from '../../config/mq';
const useStyles = makeStyles(theme=>({

    articleContainer:{
        [mq('xxs')]:{
            padding:'2rem 0 4rem 0'
        },
        [mq('sm')]:{
            padding:'2rem 8rem'
        },
        
    },

    textArea:{
        [mq('xxs')]:{
            fontSize: '0.875rem',
        },
        [mq('sm')]:{
            fontSize:'1.5rem',
            borderTop:`4px solid ${theme.palette.primary.main}`,

        },
        margin:'15px 17px',
        marginTop:'0',
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
        fontWeight: '400',
        
        lineHeight: '152%',
    }
}))

export default useStyles;