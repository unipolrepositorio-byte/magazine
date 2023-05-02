import { makeStyles } from '@material-ui/core';
import { NoEncryption } from '@mui/icons-material';
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({
    wraper: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        display: 'flex', 
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center', 
        width: '70%',
    },
    button: {
        display: 'felx',
        fontSize: '8px',
        width: '58px',
        backgroundColor: theme.palette.neutro1.main,
        color: theme.palette.primary.main,
        fontFamily: 'Roboto-Bold',
        padding: '0.1rem 0.3rem 0.1rem 0.3rem',
        boxShadow: 'none',
        borderRadius: '2px',
        border: 'none',
        textTransform: 'uppercase',
        content: "buscar>gdhrthsa",
        '& svg': {
            position: 'absolute',
            display: 'inline',
            fontSize: '8px',
            marginLeft: '-0.5px',
            marginTop: '0.5px',
        },
    },

    input: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.neutro1.main,
                borderWidth: '0 0 2px 0',
                borderRadius: 0,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.neutro1.main,
                borderWidth: '0 0 2px 0',
                borderRadius: 0,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.neutro1.main,
                borderWidth: '0 0 2px 0',
                borderRadius: 0,
            },
        },
    },
    [mq('md')]: {
        input: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 10px 0',
                    borderRadius: 0,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 10px 0',
                    borderRadius: 0,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 10px 0',
                    borderRadius: 0,
                },
            },
        },
        button: {
            fontSize: '36px',
            width: '165px',
            backgroundColor: theme.palette.neutro1.main,
            color: theme.palette.primary.main,
            fontFamily: 'Roboto-Bold',
            padding: '0.1rem 0.3rem 0.1rem 0.3rem',
            boxShadow: 'none',
            border: 'none',
            borderRadius: '0',
            textTransform: 'uppercase',
            '& svg': {
                display: 'none'
            },
        },
    },

}));

export default useStyles