import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from './volumeItemComponent.styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { BanerContext } from '../../../context/BanerContext';

const VolumeItemComponent = (props) => {
    const { setDate } = useContext(BanerContext);
    const { data } = props;
    const navigate = useNavigate();

    const goVolume = (id, date) => {
        setDate(date)
        navigate(`/volumes/volume/${id}`)
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.wrapperDesktop} >
                <ImageList sx={{ margin: 3 }} cols={3} gap={75}>
                    {data.map((item) => (
                        <>
                            <ImageListItem key={item.id} sx={{ width: '18rem' }} onClick={() => goVolume(item.id, item.date)}>
                                <img
                                    src={`${item.portrait}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.portrait}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className={classes.container}>
                                    <Typography variant="h5">
                                        {item.date}
                                    </Typography>
                                    <Typography variant="h4">
                                        Vol. 1
                                    </Typography>
                                </div>
                            </ImageListItem>
                        </>
                    ))}
                </ImageList>
            </div >

            <div className={classes.wrapperMobile} >
                <ImageList sx={{ margin: 3 }} cols={2} gap={20}>
                    {data.map((item) => (
                        <>
                            <ImageListItem key={item.id} onClick={() => goVolume(item.id, item.date)}>
                                <img
                                    src={`${item.portrait}`}
                                    srcSet={`${item.portrait}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className={classes.container}>
                                    <Typography variant="h5">
                                        {item.date}
                                    </Typography>
                                    <Typography variant="h4">
                                        Vol. 1
                                    </Typography>
                                </div>
                            </ImageListItem>
                        </>
                    ))}
                </ImageList>
            </div >
        </>
    )
}
export default VolumeItemComponent;