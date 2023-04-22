import useStyles from "./bannerComponent.styles"
const BannerComponent = ({children}) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
    </div>
}
export default BannerComponent;