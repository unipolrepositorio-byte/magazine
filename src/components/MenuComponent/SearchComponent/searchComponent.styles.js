import { makeStyles } from '@material-ui/core';
import { NoEncryption } from '@mui/icons-material';
import mq from '../../../config/mq';

const useStyles = makeStyles(theme => ({

    wraper: {
        width: '100%',
        marginTop: '-1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    container: {
        display: 'flex', 
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center', 
        justifyContent: 'center',
        width: '16.3rem',
    },
    collapse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    button: {
        display: 'felx',
        fontSize: '8px',
        width: '3.6rem',
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
            color: theme.palette.neutro1.main,
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
                color: theme.palette.neutro1.main,
                '& fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
            },
        },
        button: {
            fontSize: '36px',
            width: '10.3rem',            
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
        wraper: {
            width: '100%',
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
        },
        container: {
            display: 'flex', 
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center', 
            justifyContent: 'center',
            width: '50rem',
        },
        collapse: {
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center', 
        },
    },

    [mq('sm')]: {
        input: {
            '& .MuiOutlinedInput-root': {
                color: theme.palette.neutro1.main,
                '& fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.neutro1.main,
                    borderWidth: '0 0 8px 0',
                    borderRadius: 0,
                },
            },
        },
        button: {
            fontSize: '36px',
            width: '10.3rem',            
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
        wraper: {
            width: '100%',
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
        },
        container: {
            display: 'flex', 
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center', 
            justifyContent: 'center',
        },
        collapse: {
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center', 
        },
    },


}));

export default useStyles