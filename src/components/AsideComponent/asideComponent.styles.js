import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    backgroundSize: "cover",
    display: "flex",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    fontSize: "25px",
  },
}));

export default useStyles;
