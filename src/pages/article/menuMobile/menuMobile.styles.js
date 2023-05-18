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
            '& text':{
                stroke:theme.palette.secondary.main, 
                strokeWidth:'2' 
            }
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
        background:'#EEEEEE',
        width:'50vw',
        '& ul':{
            
            fontSize:'0.8rem',
            fontFamily:'Lato-ligth',
            padding:'0 20px',
            '& a':{
                color:theme.palette.primary.main,
            }
        }
    },
    menuReferencesList:{
        gap:'5px'
    },
    menuMedia:{
        background:theme.palette.primary.main,
        width:'100vw'
    },
    optionMenuMedia:{
        borderBottom:`1px solid ${theme.palette.primary.main}`,
        display:'flex',
        justifyContent:'center',
        background:'white',
        '& button':{
            color:theme.palette.primary.main,
            height:'20px'
        }
    },
    bodyPanelMedia:{
        overflowY:'auto',
        overflowX:'hidden',
        height:'auto',
        maxHeight:'calc(100vh - 106px)',
        background:theme.palette.primary.main,

    },
    figureMedia:{
        marginBottom:'2.5rem',
        gap:'10px',
        '& img':{
            width:'auto',
            maxWidth:'100%',
            display:'block',
            margin:'auto'
        },
        '& .MuiButtonBase-root':{
            background:theme.palette.neutro1.main,
            fontFamily:'Lato-ligth',
            fontWeight:'700',
            color:theme.palette.primary.main,
            borderRadius:'20px',
            height:'25px',
            display:'block',
            margin:'0 auto',
            display:'grid',
            placeContent:'center'
        },
        '& p':{
            color: theme.palette.neutro1.main,
            fontFamily:'Lato-ligth',
            fontSize:'0.875rem',
            paddingLeft:'1rem'
        }
    },
    tableMedia:{
        marginBottom:'2.5rem',
        gap:'10px',
        padding:'1rem',
        color:theme.palette.neutro1.main,
        fontFamily:'Lato-ligth',
        '& label':{
            fontSize:'0.875rem',
        }
    },
}))