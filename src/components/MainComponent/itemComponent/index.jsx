import { IconButton, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';
import pdfIcon from '../../../assets/icons/pdf.svg'


const ItemComponent = ({ props }) => {
  const { id, title, date, brief, pdf, author } = props;

  const classes = useStyles();

  return (
    <Box className={classes.wrapper} >
      <Box className={classes.content}>
        <Typography variant="h3" >
          ARTICULOS MAS RECIENTES
        </Typography>
        <Typography>
          {date}
        </Typography>
        <Typography variant="h4" >
          {title}
        </Typography>
        <Typography variant="h5">
          {brief}
        </Typography>
        <Typography>
          {author}
        </Typography>
        <div className={classes.icons} >
          <IconButton aria-label="pictureAsPdfIcon" >
            <img src={pdfIcon} alt="pdf icon" />
          </IconButton>
          <PopperContainer />
        </div>
        <hr />
        <div className={classes.separator}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </Box>
    </Box>
  );
};

export default ItemComponent;
