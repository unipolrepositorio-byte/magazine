import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        [mq('xxs')]: {
            minWidth: '20rem'
        },
        [mq('md')]: {
            minWidth: '60rem',
            
        }
    },
    grid: {
        display: 'grid',
        [mq('xxs')]: {
            gridTemplateColumns: 'auto',
            width: '90%'
        },
        [mq('sm')]: {
            gridTemplateColumns: 'auto auto',
            width: '100%',
        },
        [mq('md')]: {
            gridTemplateColumns: 'auto auto auto auto',
            width: '60rem',
        }
        
    }
}));
export default useStyles;