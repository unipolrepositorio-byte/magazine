import { useContext, useEffect } from 'react';
import useStyles from './breadCrumbComponent.styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BanerContext } from '../../context/BanerContext';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import breadCrumbService from '../../async/services/breadCrumbService';

const BreadCrumbComponent = () => {
    const { data, isLoading, error } = useQuery('bradCrumb', () => breadCrumbService());
    const {
        searchInput,
        initialDate,
        setInitialDate,
        initialVolume,
        setInitialVolume,
        initialId,
        setInitialId } = useContext(BanerContext);
    const classes = useStyles();
    const { id } = useParams();
    useEffect(() => {
        if (data) {
            const dateVolume = new Date(`${data.data[0].attributes.volume.data.attributes.date}T00:00:00`);
            const dateVolumeFormat = dateVolume.
                toLocaleDateString('en-us',
                    {
                        year: "numeric",
                        day: 'numeric',
                        month: "short"
                    })
            const titleVolume = data.data[0].attributes.volume.data.attributes.title
            setInitialId(data.data[0].attributes.volume.data.id);
            setInitialDate(dateVolumeFormat);
            setInitialVolume(titleVolume);
        }
    }, [isLoading])
    const { state } = useLocation();

    return (
        <div className={classes.container}>
            {!searchInput && <Breadcrumbs separator="|" aria-label="breadcrumb"
                className={classes.content}>
                <Link
                    to={`/volumes/${id ? id : initialId}`}>
                    {id && state ? state.dateVolume : initialDate}
                </Link>
                <Link
                    to={`/volumes/volume/${id ? id : initialId}`}
                    state={{ dateVolume: initialDate, volume: initialVolume }}>
                    {id && state ? state.volume : initialVolume}
                </Link>
                <Typography>Nu.1</Typography>
            </Breadcrumbs>}

        </div>
    )
}
export default BreadCrumbComponent;