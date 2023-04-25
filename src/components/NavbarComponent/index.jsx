import useStyles from "./navbarComponent.styles"
const NavbarComponent = ({children}) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h3 className = {classes.textDescription} >NavbarComponent</h3>
    </div>
}
export default NavbarComponent;