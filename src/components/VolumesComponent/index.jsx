import { useParams } from 'react-router-dom';
import VolumeItemComponent from './VolumeItemComponent';
import useStyles from './volumesComponent.styles';
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import volumesService from '../../async/services/volumesService';

const VolumesComponent = ({ children }) => {
    const { date } = useParams();
    const { data, isLoading, isError, error } = useQuery(date ? `${date}` : 'volumes', () => volumesService(date));
    const classes = useStyles();

    if (isError) {
        return <div>Error al obtener los datos: {error.message}</div>;
    }
    return (
        <div className={classes.container}>
            {date && <>
                <Typography variant="h3" >
                    VOLÚMENES
                </Typography>
                {isLoading ? <p>...Loading</p> : <VolumeItemComponent data={data.data.attributes.volumes.data} />}
            </>}
            {!date && <>
                <Typography variant="h3" >
                    VOLÚMENES
                </Typography>
                {isLoading ? <p>...Loading</p> : <VolumeItemComponent data={data.data} />}
            </>}
        </div>
    )
}
export default VolumesComponent;