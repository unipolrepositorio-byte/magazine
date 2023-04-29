import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDescription: {
    fontSize: '25px',
  },
}));

export default useStyles;
