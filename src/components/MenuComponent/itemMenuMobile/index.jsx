import useStyles from "./itemMenuMobile.styles.js";
import {ReactComponent as Home} from '../../../assets/image/inicio.svg';
import {ReactComponent as Articles} from '../../../assets/image/articulos.svg'
import {ReactComponent as Volumes} from '../../../assets/image/volumenes.svg'
import { IconButton } from "@material-ui/core";


const ItemMenuMobile = ({label,iconName}) => {

    const classes = useStyles();
    const icons = {
        'home': <Home className={classes.icon}/>,
        'articles': <Articles className={classes.icon}/>,
        'volumes': <Volumes className={classes.icon}/>
    }

    return (
        <>
            <IconButton className={classes.iconItemMenu} >
                {icons[iconName]}
            </IconButton>
            <div className={classes.labelItemMenu}>{label}</div>
        </>
    )
}

export default ItemMenuMobile;