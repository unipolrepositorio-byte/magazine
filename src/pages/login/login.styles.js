import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignContent: 'center', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
            [mq('xxs')] : {
                width: '90%',
                minHeight: '10rem',
                marginTop: '1rem'
            },
            [mq('sm')] : {
                width: '60%',
                minHeight: '10rem',
                marginTop: '1rem'
            },
            [mq('md')] : {
                width: '40%',
                minHeight: '10rem',
                marginTop: '5rem'
            }
        },
    }
}));
export default useStyles;