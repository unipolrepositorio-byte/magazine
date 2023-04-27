import { makeStyles } from "@material-ui/core";
import mq from '../../config/mq';

const useStyles = makeStyles(theme => ({
    menu: {
        'ul': {
            listStyle: 'none',
            'li': {
                marginLeft: '10px'
            }
        }
    },

    /*  DESKTOP STYLES  */
    menuDesktop: {
        [mq('xxs')]:{
            display: 'none'
        },
        [mq('sm')]:{
            display: 'block'
        }
    },
    menuContainer: {
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    link:{
        textDecoration:'none'
    },
    iconContainer: {
        '&.MuiIconButton-root': {
            color: theme.palette.neutro1.main,
        }
    },


    /*  MOBILE STYLES  */
    menuMobile: {
        [mq('sm')]:{
            display:'none'
        }
    },
    containerMenuClosed: {
        position:'fixed',
        bottom:'0',
        zIndex:'1',
        height: '46px',
        width:'100%',
        background: theme.palette.primary.main,
        borderBottom: '10px solid',
        borderBottomColor: theme.palette.secondary.main,
    },
    menuOpenerIcon:{
        position: 'absolute',
        top: '-25px',
        left: 'calc(50vw - 25px)',
        background: theme.palette.fourth.main,
        color: theme.palette.neutro1.main,
        borderRadius: '50%',
        '&.MuiSvgIcon-root':{
            width:'45px',
            height: '45px',
            zIndex: '3500'
        },
    },
    containerMenuOpened: {
        position:'fixed',
        bottom:'0',
        zIndex:'1',
        alignItems:'center',
        height: '180px',
        textAlign:'center'
    },
    backgroundImage: {
        filter: 'brightness(30%)',
        position:'absolute',
        zIndex:'-1',
        width: '100%',
        height: '100%',
        '& img':{
            width: '100%'
        }
    },
    menuCloseIcon:{
        width:'41px',
        height: '41px',
        color:'white'
    },
    
}));
export default useStyles;