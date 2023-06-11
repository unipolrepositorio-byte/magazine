import { useNavigate } from "react-router-dom";
import useStyles from './volumeItemComponent.styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageVolumeComponent from "./ImageVolumeComponent";

const VolumeItemComponent = ({ data }) => {
    const navigate = useNavigate();

    const goVolume = (id, volume, date, imageVolume, idVol) => {
        const dateVolume = new Date(`${date}T00:00:00`).toLocaleDateString('en-us',
            {
                year: "numeric",
                month: "short",
                day: 'numeric',
            })
        navigate(`/volumes/volume/${id}`, { state: { dateVolume, volume, imageVolume, idVol } })
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.wrapperDesktop} >
                <ImageList sx={{ margin: 3 }} cols={3} gap={75}>
                    {data.map((item) => (
                        <>
                            <ImageListItem key={item.id} sx={{ width: '18rem' }} onClick={() => goVolume(item?.id, item?.attributes?.title, item?.attributes?.date, item?.attributes?.portrait?.data?.attributes?.url, item?.attributes?.year_volume?.data.id)}>
                                <ImageVolumeComponent data={item.attributes} />
                            </ImageListItem>
                        </>
                    ))}
                </ImageList>
            </div >

            <div className={classes.wrapperMobile} >
                <ImageList sx={{ margin: 3 }} cols={2} gap={25}>
                    {data.map((item) => (
                        <>
                            <ImageListItem key={item.id} onClick={() => goVolume(item?.id, item?.attributes?.title, item?.attributes?.date, item?.attributes?.portrait?.data?.attributes?.url, item?.attributes?.year_volume?.data.id)}>
                                <ImageVolumeComponent data={item.attributes} />
                            </ImageListItem>
                        </>
                    ))}
                </ImageList>
            </div >
        </>
    )
}
export default VolumeItemComponent;