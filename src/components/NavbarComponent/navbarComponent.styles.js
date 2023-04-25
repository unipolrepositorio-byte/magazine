import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "6rem",
    overflow: "hidden",
    border: "1px solid",
    backgroundSize: "cover",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    [mq("md")]: {
      display: "none",
    },
  },
  textDescription: {
    fontSize: "20px",
  },
}));

export default useStyles;
