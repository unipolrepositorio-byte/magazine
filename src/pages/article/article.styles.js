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
            margin:'0px 30px 15px 30px',
        },
        [mq('sm')]:{
            fontSize:'1.5rem',
            borderTop:`4px solid ${theme.palette.primary.main}`,
            margin:'0 0 15px 0px',
        },
        fontFamily: 'Lato-Ligth',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '152%',
        '& img':{
            width: 'auto',
            maxWidth: '50%',
            display:'block',
            margin: 'auto'
        },
        '& table':{
            margin:'0 auto',
            borderCollapse: 'collapse',
            '& thead':{
                background:'#EAEAEF'
            },
            '& th': {
                border: '1px solid #DCDCE4',
                padding:'5px'
            },
            '& td': {
                border: '1px solid #DCDCE4',
                padding:'5px'
            },
        }
    }
}))

export default useStyles;