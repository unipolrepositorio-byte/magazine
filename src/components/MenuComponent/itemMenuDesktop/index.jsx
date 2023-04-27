import useStyles from './itemMenuDesktop.styles';
import { Button } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';


const ItemMenuDesktop = ({label, variant, icon=false}) => {

    const classes = useStyles();

    return (
            <Button variant={variant} className={classes.button}>
                {icon&&<DescriptionIcon/>}
                {label}
            </Button>
    )
}

export default ItemMenuDesktop;