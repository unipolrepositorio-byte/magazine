import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";
const useStyles = makeStyles(theme => ({
  container: {
    height: '28rem',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    [mq("md")]: {
      width: '100%',
      height: '28rem',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
  },
  textDescription: {
    fontSize: '40px',
  },
}));

export default useStyles;
