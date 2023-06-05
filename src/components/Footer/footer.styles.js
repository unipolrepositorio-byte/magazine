import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

        desktopContainer:{
            [mq('xxs')]:{
                display:'none'
            },
            [mq('sm')]:{
                display:'flex'
            },
            color:theme.palette.primary.main,
            background:theme.palette.neutro1.main,
            fontFamily:'Montserrat-Ligth',
            fontSize:'1rem',
        },
        title:{
            fontFamily:'Montserrat-Bold'
        },
        optionsArea:{
            margin:'20px 0px 30px 0',
            '& li':{
                whiteSpace:'nowrap',
                cursor:'pointer',
            },
            background: theme.palette.primary.main
            ,gap:'4px',
            flexWrap:'nowrap',
            '& span':{
                position:'relative',
                left:'-13px'
            }
        },
        logoContainer:{
            background:theme.palette.neutro1.main,
            placeContent:'center',
            display:'grid',
            '& img':{
                minWidth:'100px',
                width:'100%',
                maxWidth:'320px'
            },
            [mq('sm')]:{
                padding:'0px 5px',
            },
            [mq('md')]:{
                padding:'0px 23px',
            }
            
            
        },
        firstOptionArea:{
            background:theme.palette.neutro1.main,
            flexWrap:'nowrap',
            paddingTop:'5px',
            
            [mq('sm')]:{
                paddingLeft:'5px',
            },
            [mq('md')]:{
                paddingLeft:'23px',
            },
        },
        secondOptionArea:{
            background:theme.palette.neutro1.main,
            paddingTop:'5px',
            paddingLeft:'23px',
            [mq('sm')]:{
                paddingLeft:'5px',
            },
            [mq('md')]:{
                paddingLeft:'23px',
            }
        },
        contactArea:{
            '& svg':{
                width:'2.5rem',
                fill:theme.palette.primary.main
            }
        },
        wraperContactArea:{
            gap:'3px',
            background: theme.palette.primary.main,
            margin:'1rem'
        },
        firstContact:{
            placeContent:'center',
            placeItems:'center',
            display:'flex',
            gap:'5px',
            background:theme.palette.neutro1.main,
            padding:'3px 0px'
        },
        secondContact:{
            placeContent:'center',
            placeItems:'center',
            display:'flex',
            gap:'5px',
            background:'white',
            padding:'3px 0px'
        },

        mobileContainer:{
            [mq('sm')]:{
                display:'none',
            },
            margin:'30px 0px 70px 0px',
            gap:'1rem',
            color:theme.palette.primary.main,
            background:theme.palette.neutro1.main
        },
        logoContainerMobile:{
            placeContent:'center',
            display:'flex',
            '& img':{
                width:'60%',
                objectFit:'contain',
            }
        },
        optionsAreaMobile:{
            background:theme.palette.primary.main,
            gap:'3px',
            '& li':{
                margin:'10px 0'
            }
        },
        itemOptionMobile:{
            paddingTop:'0.4rem',
            background:theme.palette.neutro1.main
        },
        titleMobile:{
            fontFamily:'Montserrat-Bold',
            placeContent:'center',
            display:'flex',
            width:'100%'
        },
        contactAreaMobile:{
            background:theme.palette.primary.main,
            gap:'2px',
            justifyContent:'flex-end'
        },
        itemContactAreaMobile:{
            background:theme.palette.neutro1.main,
            justifyContent:'flex-end',
            alignItems:'center',
            gap:'5px',
            display:'flex',
            padding:'5px',
            '& svg':{
                width:'2rem',
                fill:theme.palette.primary.main
            }
        }
}))