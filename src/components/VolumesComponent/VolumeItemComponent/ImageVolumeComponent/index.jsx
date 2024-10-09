import useStyles from './imageVolumeComponent.styles';
import Typography from '@mui/material/Typography';
import getEnvVariables from '../../../../config/config';

const ImageVolumeComponent = (props) => {
    const { strapiServer, strapiServerPort } = getEnvVariables();
    const { date, title, portrait } = props.data;
    const dateVolume = new Date(`${date}T00:00:00`).toLocaleDateString('en-us',
        {
            year: "numeric",
            month: "short",
            day: 'numeric',
        })
    const classes = useStyles({ image: portrait ? `${strapiServer}${portrait.data.attributes.url}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Escudo_de_la_Polic%C3%ADa_Boliviana.jpg' });
    return (
        <>
            <div className={classes.book}>
                <div className={classes.cover}>
                </div>
            </div>
            <div className={classes.container}>
                <Typography variant="h5">
                    {dateVolume}
                </Typography>
                <Typography variant="h4">
                    {title}
                </Typography>
            </div>
        </>
    )
}
export default ImageVolumeComponent;