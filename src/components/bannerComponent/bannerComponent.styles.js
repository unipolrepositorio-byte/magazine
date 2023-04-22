import { makeStyles } from "@material-ui/core";
import banner from '../../assets/image/banner.jpg'
const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '16rem',
        border: '1px solid #000',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url('${banner}')`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center'
    }
}));

export default useStyles;