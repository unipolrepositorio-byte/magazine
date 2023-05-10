import { useParams } from 'react-router-dom';
import useStyles from './volumeDetailComponent.styles';
const VolumeDetailComponent = ({ children }) => {
    const classes = useStyles();
    const { id } = useParams();
    return <div className={classes.container}>
        {children}
        <h3 className={classes.textDescription} >volume in id: {id}</h3>
    </div>
}
export default VolumeDetailComponent;