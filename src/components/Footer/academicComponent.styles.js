import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '50px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center', 
        marginTop: '3rem',
        width: '100%',
        height: '10rem',
        color: '#fff', 
        backgroundColor: theme.palette.primary.main
    }
}));
export default useStyles;