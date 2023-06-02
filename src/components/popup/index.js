import { Dialog } from "@mui/material" 
import { useStyles } from "./popup.styles"
import { ReactComponent as ArrowIcon } from '../../assets/image/flecha.svg';
import { ReactComponent as DownloadIcon } from  '../../assets/image/descargas.svg';
import imagen from '../../assets/image/banner.jpg';

export const PopUp = ({open, close, src}) => {

    const classes = useStyles()

    return (
        <Dialog open={open} onClose={close} className={classes.dialogs}>
            <div className={classes.container}>
                <img src={src}/>
            </div>
            <ArrowIcon className={classes.arrowIcon} onClick={close}/>
            <DownloadIcon className={classes.downloadIcon}/>
        </Dialog>
    )
}