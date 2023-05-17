import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    wrapper: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        [mq('xxs')]: {
            width: '300px',
            overflow: 'scroll',
        },
        [mq('md')]: {
            width: '100%',
            overflow: 'hidden',
        },
    }
}));
export default useStyles;