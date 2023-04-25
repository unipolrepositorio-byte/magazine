import useStyles from "./ImageCarousel.styles"
const ImageCarousel = ({children}) => {
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h3 className = {classes.textDescription} >ImageCarousel</h3>
    </div>
}
export default ImageCarousel;