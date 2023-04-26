import useStyles from './sectionComponent.styles';
const SectionComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                {children}
            </div>
        </>
    )
}
export default SectionComponent;