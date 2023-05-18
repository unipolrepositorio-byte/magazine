import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme=>({
    menuDesktop:{
        [mq('xxs')]:{
            display:'none'
        },
        [mq('sm')]:{
            display:'flex'
        },
    },
    menuContainer:{
        width:'50px',
        [mq('sm')]:{
            margin:'0 10px'
        },
        [mq('md')]:{
            margin:'0 20px'
        }
    },
    hamburguerIcon:{
        background:theme.palette.primary.main,
        height:'50px',
        '& svg':{
            fill: theme.palette.primary.main,
            height:'50px',
            width:'50px',
        },
        '& button':{
            height:'50px',
            minWidth:'50px',
            width:'50px',
            padding:'0',
        },
    },
    itemMenu:{
        background: theme.palette.secondary.main,
        placeContent:'center',
        display:'grid',
        height:'50px',
        '& button':{
            height:'50px',
            minWidth:'50px',
            width:'50px',
            padding:'0',
        },
        '& svg':{
            fill: theme.palette.neutro1.main,
            height:'30px',
            width:'30px',
            '& text':{
                stroke:theme.palette.neutro1.main, 
                strokeWidth:'2' 
            }
        }
    },
    subMenu:{
        [mq('sm')]:{
            width:'290px'
        },
        [mq('md')]:{
            width:'350px'
        }
    },
    referencesContainer:{
        background:'#EEEEEE',
        height:'100vh',
        fontFamily: 'Lato-ligth',
        fontWeight: '400',
        fontSize: '25px',
        color: theme.palette.secondary.main,
        '& a':{
            color: theme.palette.secondary.main,
        }
    },
    referencesContainerLogo:{
        display:'grid',
        placeContent:'center',
        marginTop:'20px',
        '& img':{
            [mq('sm')]:{
                width:'180px'
            },
            [mq('md')]:{
                width:'200px'
            },
        }
    },
    panelContainer:{
        background:theme.palette.primary.main,
        color: theme.palette.neutro1.main,
        fill: theme.palette.neutro1.main,
        
        height:'100vh',
        fontSize:'25px',
        fontFamily: 'Lato-ligth',
        fontWeight: '800',
        display:'grid',
        justifyContent:'center',
        alignContent: 'start',
        rowGap:'20px'
    },
    titlePanel:{
        margin:'2rem'
    },
    panelMediaContainer:{
        fontFamily:'Lato-ligth'
    },
    titlePanelMedia:{
        height:'2rem',
        color:theme.palette.neutro1.main,
        fill:theme.palette.neutro1.main,
        background:theme.palette.primary.main,
        fontSize:'25px',
        fontWeight: '800',
        '& svg':{
            width:'27px',
            margin:'0 1.3rem'
        },
    },
    menuPanelMedia:{
        height:'1.5rem',
        '& div':{
            placeContent:'center',
            display:'grid'
        },
        '& button':{
            padding:'0',
            color: theme.palette.primary.main
        }
    },
    bodyPanelMedia:{
        overflowY:'auto',
        overflowX:'hidden',
        height:'calc(100vh - 3.5rem)',
        background:theme.palette.primary.main,

    },

    figureMedia:{
        marginBottom:'5rem',
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
            height:'35px',
            display:'block',
            margin:'0 auto'
        },
        '& p':{
            color: theme.palette.neutro1.main,
            fontFamily:'Lato-ligth',
            fontSize:'1.2rem',
            paddingLeft:'1rem'
        }
    },
    tableMedia:{
        marginBottom:'5rem',
        gap:'10px',
        padding:'1rem',
        color:theme.palette.neutro1.main,
        fontFamily:'Lato-ligth',
        '& label':{
            fontSize:'1.2rem',
        }
    },

    referenceContainer:{
        marginBottom:'15px',
        fontSize:'0.9rem',
        paddingLeft:'1.5rem'
    },
    indexReferences:{
        position:'absolute',
        left:'-15px',
        top:'-2px',
        fontSize:'1rem',
    },
    linkReferences:{
        columnGap:'5px',
        '& a':{
            color:theme.palette.neutro1.main,
            '& :hover':{
                cursor:'pointer'
            }
        }
    }
    


}))