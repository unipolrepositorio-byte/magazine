import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({

    dialogs:{
        '& .MuiPaper-root':{
            maxWidth:'calc(100vw - 5rem)',
            maxHeight:'calc(100vh - 6.75rem)',
        }
    },
    
    container:{
        maxWidth:'calc(100vw - 5rem)',
        maxHeight:'calc(100vh - 6.75rem)',
        background:theme.palette.primary.main,
        borderTop:`3rem solid ${theme.palette.primary.main}`,
        borderRight:`1.5rem solid ${theme.palette.primary.main}`,
        borderBottom:`1.75rem solid ${theme.palette.primary.main}`,
        borderLeft:`1.5rem solid ${theme.palette.primary.main}`,
        '& img':{
            width:'auto',
            height:'auto',
            maxWidth:'calc(100vw - 8rem)',
            maxHeight:'calc(100vh - 11.5rem)',
        }
    },
    arrowIcon:{
        height:'2rem',
        transform: 'rotate(180deg)',
        position:'absolute',
        top:'0.5rem',
        left:'1.5rem',
        fill:theme.palette.neutro1.main,
        cursor:'pointer',
        transition:'.5s all ease',
        '&:hover':{
            height:'2.2rem',
            transition:'.5s all ease'
        }
    },
    downloadIcon:{
        height:'2rem',
        position:'absolute',
        top:'0.5rem',
        right:'1.5rem',
        fill:theme.palette.neutro1.main,
        cursor:'pointer',
        transition:'.5s all ease',
        '&:hover':{
            height:'2.2rem',
            transition:'.5s all ease'
        }
    }
}))