import useStyles from './asideComponent.styles';
const AsideComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h3 className={classes.textDescription} >AsideComponent</h3>
    </div>
}
export default AsideComponent;