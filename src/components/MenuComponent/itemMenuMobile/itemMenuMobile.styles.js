import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    
    iconItemMenu:{
        '&&.MuiButtonBase-root':{
            backgroundColor:theme.palette.neutro1.main,
        }
    },
    labelItemMenu: {
        marginTop:'5px',
        color: theme.palette.neutro1.main,
        fontWeight:'bolder',
        fontSize:'1rem'
    },
    icon:{
        fill: theme.palette.secondary.main,
        width:'20px',
        height:'20px'
    }
}));
export default useStyles;