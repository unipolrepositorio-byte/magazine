import useStyles from './breadCrumbComponent.styles';
import HomeIcon from '@mui/icons-material/Home';
const BreadCrumbComponent = () => {
    const classes = useStyles();
    return <div className={classes.container}>
            <div className={classes.content}>
                <HomeIcon /> Repositorio Académico
            </div>
        </div>
}
export default BreadCrumbComponent;