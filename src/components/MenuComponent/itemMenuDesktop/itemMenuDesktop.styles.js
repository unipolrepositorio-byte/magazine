import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    button:{
        '&.MuiButton-root': {
            margin:'3px',
            fontWeight:'bolder',
            color: theme.palette.neutro1.main,
            padding: '3px 5px',
            gap:'3px',
            '&:hover': {
                color: theme.palette.neutro2.main,
            }
        },
        '&.MuiButton-text': {
            '&:hover': {
                background: 'none',
            }
        },
        '&.MuiButton-contained': {
            background: theme.palette.primary.main,
            '&:hover':{
                borderColor: theme.palette.neutro1.main,
                background: theme.palette.neutro1.main,
            }
        },
        '&.MuiButton-outlined': {
            background: 'none',
            borderColor: theme.palette.neutro1.main,
            '&:hover':{
                borderColor: theme.palette.neutro2.main,
                background: 'none',
            }
        }
    },
    icon:{
        fill:theme.palette.neutro1.main,
    }
}));

export default useStyles