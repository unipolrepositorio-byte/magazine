import useStyles from "./itemMenuMobile.styles.js";
import { SvgIcon } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

const ItemMenuMobile = ({label}) => {

    const classes = useStyles();
    return (
        <>
            <SvgIcon className={classes.iconItemMenu}>
                <DescriptionIcon/>
            </SvgIcon>
            <div className={classes.labelItemMenu}>{label}</div>
        </>
    )
}

export default ItemMenuMobile;