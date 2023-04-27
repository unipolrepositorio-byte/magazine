import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    iconItemMenu: {
        '&.MuiSvgIcon-root':{
            width:'45px',
            height: '45px',
        },
        padding: '2px',
        background:'white',
        borderRadius: '50%',
        color: theme.palette.secondary.main
    },
    labelItemMenu: {
        color:'white'
    },

}));
export default useStyles;