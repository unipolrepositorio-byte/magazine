import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.neutro1.main,
        padding: '0.5rem',
        width: '100%',
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
        display: 'flex',
        [mq('xxs')]: {
            minWidth: '20rem'
        },
        [mq('md')]: {
            minWidth: '60rem',
        },
    }
}));
export default useStyles;