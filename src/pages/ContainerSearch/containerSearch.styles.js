import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    wrapper: {
        with: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '1rem'
    },
    comboBox: {
        backgroundColor: '#fff',
        minWidth: '220px',
        borderRadius: '0.5rem',
        opacity: '0.6',
        margin: '3px'
    },
    button: {
        '&.MuiButton-root': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.neutro1.main,
            '&:hover': {
                color: theme.palette.neutro2.main
            }
        }
        
    },
    container: {
        color: theme.palette.neutro1.main,
        display: 'flex',
        [mq('xxs')]: {
            minWidth: '20rem',
            marginDown: '5px',
            flexDirection: 'column'
        },
        [mq('md')]: {
            minWidth: '60rem',
            flexDirection: 'row'
        },
    },
}));
export default useStyles;