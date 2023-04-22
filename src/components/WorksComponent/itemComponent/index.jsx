import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import useStyles from './items.styles';
import ArticleIcon from '@mui/icons-material/Article';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BookIcon from '@mui/icons-material/Book';
import { Paper } from '@material-ui/core';
import fatescipolImg from '../../../assets/image/fatescipol.jpg';
import anapolImg from '../../../assets/image/anapol.jpg';
import cefotesImg from '../../../assets/image/cefotes.jpg';
import espImg from '../../../assets/image/esp.jpg'
import { useNavigate } from 'react-router-dom';
const ItemComponent = ({label, icon, route}) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const LoadIcon = ({name = 'police'}) => {
        const iconMap = {
            school: <SchoolIcon className={classes.icon}/>,
            article: <ArticleIcon className={classes.icon} />,
            copy: <ContentCopyIcon className={classes.icon} />,
            book: <BookIcon className={classes.icon}/>,
            fatescipol: <img  src={fatescipolImg} className={classes.imageScale} />,
            anapol: <img  src={anapolImg} className={classes.imageScale} />,
            cefotes: <img  src={cefotesImg} className={classes.imageScale} />,
            esp: <img  src={espImg} className={classes.imageScale} />
        }
        return iconMap[name];
    }
    const onClickHandler = () => {
        if (route != undefined | route != null) {
            navigate(`/find/${route}`);
        }
    }
    return <Paper className={classes.wrapper}>
        <div className={classes.wrapperIcon}>
            <LoadIcon name={icon} />
        </div>
        
        <Button className={classes.button} onClick={onClickHandler}> {label} </Button>
    </Paper>
}
export default ItemComponent;