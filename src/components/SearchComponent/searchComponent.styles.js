import { makeStyles } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import mq from "../../config/mq";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "50%",
    [mq("xxs")]: {
      width: "100%",
    },
    [mq("md")]: {
      marginLeft: theme.spacing(3),
      width: "25rem",
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBase: {
    color: "inherit",
    background: 'rgba(0, 0, 0, 0)',
    border: 'none',
    outline: 'none',
    fontSize: '20px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `50px`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
export default useStyles;
