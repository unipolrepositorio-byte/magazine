import { makeStyles } from "@material-ui/core";
import mq from '../../config/mq';

const useStyles = makeStyles(theme => ({
    /*  DESKTOP STYLES  */
    menuDesktop: {
        height:'max-Content',
        width:'100%',
        [mq('xxs')]:{
            display: 'none'
        },
        [mq('sm')]:{
            display: 'block',
            zIndex:'1'
        },
        
    },
    menuContainer: {
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'50px',
        paddingBottom: '10px'
    },
    menuContainerHidden: {
        visibility: 'hidden'
    },
    link:{
        textDecoration:'none'
    },
    icon: {
        width:'20px',
        height:'20px'
    },


    /*  MOBILE STYLES  */
    menuMobile: {
        [mq('sm')]:{
            display:'none'
        }
    },
    menuLoginMobile:{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        '& a':{
            zIndex: '1'
        }
    },
    containerMenuClosed: {
        position:'fixed',
        bottom:'0',
        zIndex:'2',
        height: '46px',
        width:'100%',
        background: theme.palette.primary.main,
        borderBottom: '10px solid',
        borderBottomColor: theme.palette.secondary.main,
    },
    menuOpenerIcon:{
        position: 'absolute',
        top: '-22.5px',
        left: 'calc(50vw - 22.5px)',
        '&.MuiSvgIcon-root':{
            width:'45px',
            height: '45px',
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
        width:'45px',
        height: '45px',
    },
    closeIcon:{
        fill: theme.palette.neutro1.main
    },
    buttonVolumes:{
        [mq('xxs')]:{
            padding:'1rem',
            marginTop: '-4rem', 
        },
        [mq('sm')]:{
            padding:'2rem 5rem',
        },
        [mq('md')]:{
            padding:'1rem 8rem',
        },
        [mq('lg')]:{
            padding:'1rem 15rem',
            paddingTop:''
        },
        [mq('xl')]:{
            padding:'1rem 30rem',
            paddingTop:''
        },
        '& button':{
            background: theme.palette.neutro1.main,
            padding: '0px 10px',
            color: theme.palette.primary.main,
            fontWeight: 'bolder',
            fontSize:'0.875rem',
            '&:hover':{
                background: theme.palette.primary.main,
                color: theme.palette.neutro1.main,
            },
            '&.MuiButton-text':{
                color:'white',
                background:'transparent',
                '&:hover':{
                    background:'rgba(0,0,0,.5)'
                }
            }
        },
    },   
    collapse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
}));
export default useStyles;