import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '10rem',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        [mq('xxs')]: {
            width: '100%',
            margin: '10px'
        },
        [mq('sm')]: {
            width: '21rem',
            margin: '15px'
        },
        [mq('md')]: {
            width: '15rem',
            margin: '10px'
        }
    },
    wrapperIcon: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        marginBottom: '1rem'
    },
    icon: {
        transform: 'scale(3)',
        color: theme.palette.primary.main,
    },
    imageScale: {
        width: '90px'
    },
    button: {
        '&.MuiButton-root': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.neutro1.main,
            '&:hover': {
                color: theme.palette.neutro2.main
            }
        }
        
    }
}));
export default useStyles;