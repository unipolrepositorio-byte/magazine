import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    image:{
        filter: 'brightness(40%)',
        width: '100%',
        objectFit: 'cover',
        
        [mq('xxs')]:{
            height: '12rem',
        },
        [mq('sm')]:{
            height: 'calc(25rem - 10px)',
        }
    }
}));
export default useStyles;