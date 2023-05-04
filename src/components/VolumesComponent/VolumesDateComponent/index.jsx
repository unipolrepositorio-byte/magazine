import { useParams } from 'react-router-dom';
import useStyles from './volumesDateComponent.styles';

const VolumesDateComponent = ({ children }) => {
    const { date } = useParams();
    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <h3 className={classes.textDescription} >Volumes of year: {date} </h3>
    </div>
}
export default VolumesDateComponent;