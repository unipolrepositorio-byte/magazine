import useStyles from './breadCrumbComponent.styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

const YEAR = 2023;
const VOLUMEN_ID = 1;

const BreadCrumbComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Breadcrumbs separator="|" aria-label="breadcrumb"
                className={classes.content}>
                <Link
                    to={`/volumes/${YEAR}`}>
                    ABRIL 16. {YEAR}
                </Link>
                <Link
                    to={`/volume/${VOLUMEN_ID}`}>
                    Vol.1
                </Link>
                <Typography>Nu.1</Typography>
            </Breadcrumbs>
        </div>
    )
}
export default BreadCrumbComponent;