import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VolumeItemComponent from './VolumeItemComponent';
import useStyles from './volumesComponent.styles';
import Typography from '@mui/material/Typography';
import useFetch from '../../hooks/useFetch';
import volumes from '../../__mock__/volumes'

const VolumesComponent = ({ children }) => {
    const { date } = useParams();
    // if date exists date in params so add param in uri for search
    //let URI = date ? `${volumes}/${date}` : volumes;
    const URI = volumes

    const { data, isLoading, getData } = useFetch(true, URI);
    const classes = useStyles();
    useEffect(() => {
        getData();
    }, [isLoading])

    return (
        <div className={classes.container}>
            <Typography variant="h3" >
                VOLÚMENES
            </Typography>
            <VolumeItemComponent data={data} />
        </div>
    )
}
export default VolumesComponent;