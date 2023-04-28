import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  box: {
    display: 'flex', 
    flexDirection: 'column', 
    backgroundColor: theme.palette.secondary.main, 
    paddingTop: '0.5rem',
    paddingBottom: '1rem',
    gap: 18,
  },
}));
export default useStyles;
