import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '18.5rem',
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textDescription: {
    fontSize: '40px',
  },
}));

export default useStyles;
