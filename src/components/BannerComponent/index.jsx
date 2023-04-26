import useStyles from './bannerComponent.styles'
const BannerComponent = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h3 className={classes.textDescription} >BanerComponent</h3>
    </div>
}
export default BannerComponent;