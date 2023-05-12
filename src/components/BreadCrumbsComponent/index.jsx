import { useContext } from 'react';
import useStyles from './breadCrumbComponent.styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BanerContext } from '../../context/BanerContext';
import { Link, useParams } from 'react-router-dom';

const BreadCrumbComponent = () => {
    const {
        date,
        volume,
        searchInput,
        initialDate, } = useContext(BanerContext);
    const classes = useStyles();
    const { id } = useParams();

    return (
        <div className={classes.container}>
            {!searchInput && <Breadcrumbs separator="|" aria-label="breadcrumb"
                className={classes.content}>
                <Link
                    to={`/volumes/${id ? date : initialDate}`}>
                    {id ? date : initialDate}
                </Link>
                <Link
                    to={`/volumes/volume/${id ? id : volume}`}>
                    Vol. {id ? id : volume}
                </Link>
                <Typography>Nu.1</Typography>
            </Breadcrumbs>}

        </div>
    )
}
export default BreadCrumbComponent;