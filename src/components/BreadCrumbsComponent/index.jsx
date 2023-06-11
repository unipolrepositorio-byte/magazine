import { useContext, useEffect, useState } from 'react';
import useStyles from './breadCrumbComponent.styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BanerContext } from '../../context/BanerContext';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import breadCrumbService from '../../async/services/breadCrumbService';

const BreadCrumbComponent = () => {
    const [imageVolume, setImageVolume] = useState('');
    const [initialIdVolume, setInitialIdVolume] = useState('');
    const { data, isLoading, isError, error } = useQuery('bradCrumb', () => breadCrumbService());
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
            const date = data.data.length > 0 ? data.data[0].attributes.date : '1996-04-20'
            const dateVolume = new Date(`${date}T00:00:00`);
            const dateVolumeFormat = dateVolume.
                toLocaleDateString('en-us',
                    {
                        year: "numeric",
                        day: 'numeric',
                        month: "short"
                    })
            const titleVolume = data.data.length > 0 ? data.data[0].attributes.title : ''
            setInitialIdVolume(data.data.length > 0 && data.data[0].id ? data.data[0].id : '')
            setInitialId(data.data.length > 0 && data.data[0].attributes.year_volume ? data.data[0].attributes.year_volume.data.id : '');
            setImageVolume(data.data.length > 0 ? data.data[0].attributes.portrait.data.attributes.url : '');
            setInitialDate(data.data.length > 0 ? dateVolumeFormat : '');
            setInitialVolume(titleVolume);
        }
    }, [isLoading])
    const { state } = useLocation();

    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }
    return (
        <div className={classes.container}>
            {!searchInput && <Breadcrumbs separator="|" aria-label="breadcrumb"
                className={classes.content}>
                <Link
                    to={`/volumes/${id && state.idVol ? state.idVol : initialId}`}>
                    {id && state ? state.dateVolume : initialDate}
                </Link>
                <Link
                    to={`/volumes/volume/${id ? id : initialIdVolume}`}
                    state={{ dateVolume: initialDate, volume: initialVolume, imageVolume }}>
                    {id && state ? state.volume : initialVolume}
                </Link>
            </Breadcrumbs>}

        </div>
    )
}
export default BreadCrumbComponent;