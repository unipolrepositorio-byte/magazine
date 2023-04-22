import { Paper } from "@material-ui/core";
import useStyles from "./login.styles";

const Login = () => {
    const classes = useStyles();
    return <div className={classes.container}>
        <Paper elevation={3}>
            login
            
        </Paper>
    </div>
}
export default Login;