import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '-1.8rem',
        marginBottom: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        [mq('md')]: {
            marginTop: '-5.5rem',
            marginBottom: '6rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        aligneItems: 'center',
        position: 'absolute',
        width: '12rem',
        height: '2.5rem',
        display: 'flex',
        backgroundColor: theme.palette.neutro1.main,
        //backgroundColor: 'gray',
        color: theme.palette.primary.main,
        '& a': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontSize: '0.8rem',
            fontFamily: 'Roboto-Bold',
        },
        '& p': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontSize: '0.8rem', 
            fontFamily: 'Roboto-Bold',              
        },
        '& .MuiBreadcrumbs-separator': {
            color: theme.palette.primary.main,
            fontFamily: 'Roboto-Bold',              
            fontSize: '0.8rem',
            margin: '2px',
        },
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            aligneItems: 'center',
            position: 'absolute',
            width: '26rem',
            height: '7rem',
            display: 'flex',
            backgroundColor: theme.palette.neutro1.main,
            //backgroundColor: 'gray',
            color: theme.palette.primary.main,
            '& a': {
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontFamily: 'Roboto-Bold',
            },
            '& p': {
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontSize: '1.5rem', 
                fontFamily: 'Roboto-Bold',              
            },
            '& .MuiBreadcrumbs-separator': {
                color: theme.palette.primary.main,
                fontFamily: 'Roboto-Bold',              
                fontSize: '2rem',
            }
        },
    }
}));
export default useStyles;