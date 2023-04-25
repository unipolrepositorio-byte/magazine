import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "space-around",

    "@media (max-width: 780px)": {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  textDescription: {
    fontSize: "40px",
    textAlign: "center",
  },
}));

export default useStyles;
