import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container:{
        [mq('sm')]:{
            display:'none'
        },
        position:'sticky',
        top:'0'
    },
    menuStickyContainer:{
        height:'max-content',
        border:`1px solid ${theme.palette.secondary.main}`,
    },
    menuButton:{
        background: theme.palette.primary.main,
        width:'40px',
        placeContent:'center',
        display:'grid',
        '& svg':{
            height:'40px',
            width:'40px'
        }
        
    },
    menuOptions:{
        background: theme.palette.neutro1.main,
        '& div':{
            display: 'grid',
            placeContent:'center',
            '&.active':{
                background:'#E8E8E8',
                '& svg':{
                    height:'26px',
                    width:'26px',
                }
            }
        },
        '& svg':{
            height:'23px',
            width:'23px',
            fill: theme.palette.secondary.main,
        }
    },
    menuPanel:{
        color:theme.palette.neutro1.main,
        background:theme.palette.primary.main,
        display:'grid',
        alignContent:'center',
        '& svg':{
            height:'23px',
            width:'23px',
            fill: theme.palette.neutro1.main,
        }
    },
    panelItem1:{
        '& div':{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            gap:'7px'
        }
    },
    menuReferences:{
        background:'white',
        '& ul':{
            
            fontSize:'0.8rem',
            fontFamily:'Lato-ligth',
            padding:'0 20px',
            '& a':{
                color:theme.palette.primary.main,
            }
        }
    },
    menuMedia:{
        background:theme.palette.primary.main,
        width:'calc(calc(100vw / 12) * 6)'
    },
    optionMenuMedia:{
        display:'flex',
        justifyContent:'center',
        background:'white',
        '& button':{
            color:theme.palette.primary.main,
            height:'20px'
        }
    },
    figureMedia:{
        gap:'10px',
        alignItems:'center',
        '& img':{
            marginTop:'1rem',
            width:'80%',
        },
        '& .MuiButtonBase-root':{
            background:theme.palette.neutro1.main,
            fontFamily:'Lato-ligth',
            fontWeight:'700',
            color:theme.palette.primary.main,
            borderRadius:'20px',
            height:'25px',
        },
        '& p':{
            color: theme.palette.neutro1.main,
            fontFamily:'Lato-ligth',
            fontSize:'0.8rem',
            paddingLeft:'1rem'
        }
    },
}))