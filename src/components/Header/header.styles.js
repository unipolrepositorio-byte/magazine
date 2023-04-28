import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        position:'absolute',
        width:'100%',
        display: 'grid',
        background: 'rgba(0,0,0,.5)',
        height: 'calc(18.5rem - 40px)' ,
    },
    
}));
export default useStyles;