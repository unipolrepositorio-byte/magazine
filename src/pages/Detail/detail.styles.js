import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    wrapper: {
        with: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
    },
    container: {
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        gridTemplateColumns: 'auto auto',
        [mq('xxs')]: {
            minWidth: '20rem'
        },
        [mq('md')]: {
            minWidth: '60rem',
        },
    },
}));
export default useStyles;