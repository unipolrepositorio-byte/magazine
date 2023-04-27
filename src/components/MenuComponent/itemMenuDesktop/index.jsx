import useStyles from './itemMenuDesktop.styles';
import { Button } from "@mui/material";
import { SvgIcon } from '@material-ui/core';
import {ReactComponent as Home} from '../../../assets/image/inicio.svg';
import {ReactComponent as Articles} from '../../../assets/image/articulos.svg'
import {ReactComponent as Volumes} from '../../../assets/image/volumenes.svg'



const ItemMenuDesktop = ({label, variant, iconName=false}) => {

    const classes = useStyles();

    const icons = {
        'home': <Home className={classes.icon}/>,
        'articles': <Articles className={classes.icon}/>,
        'volumes': <Volumes className={classes.icon}/>
    }
    return (
            <Button variant={variant} className={classes.button}>
                {iconName&&<SvgIcon>
                    {icons[iconName]}
                </SvgIcon>}
                {label}
            </Button>
    )
}

export default ItemMenuDesktop;