import useStyles from "./mainComponent.styles"
const MainComponent = ({children}) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h5 className={classes.textDescription} >MainComponent</h5>
    </div>
}
export default MainComponent;