import { makeStyles } from "@material-ui/core";
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    wrapper: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        width:'80%',
        margin:'auto',
        overflowX:'auto'
    }
}));
export default useStyles;