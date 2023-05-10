import { useContext } from 'react';
import useStyles from './breadCrumbComponent.styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BanerContext } from '../../context/BanerContext';
import { Link } from 'react-router-dom';

const BreadCrumbComponent = () => {
    const { date, volume, searchInput } = useContext(BanerContext);
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {!searchInput && <Breadcrumbs separator="|" aria-label="breadcrumb"
                className={classes.content}>
                <Link
                    to={`/volumes/${date}`}>
                    {date}
                </Link>
                <Link
                    to={`/volume/${volume}`}>
                    Vol. {volume}
                </Link>
                <Typography>Nu.1</Typography>
            </Breadcrumbs>}

        </div>
    )
}
export default BreadCrumbComponent;