import { IconButton, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';
import pdfIcon from '../../../assets/icons/pdf.svg'


const ItemComponent = ({ props }) => {
  const { id, title, date, brief, pdf, Authors } = props;

  const classes = useStyles();

  return (
    <Box className={classes.wrapper} >
      <Box className={classes.content}>
        <Typography>
          {date}
        </Typography>
        <Typography variant="h4" >
          {title}
        </Typography>
        <Typography variant="h5">
          {brief}
        </Typography>
        {Authors.length > 1 ? <Typography>
          {Authors.map(autor => (
            autor + ' / '
          ))}
        </Typography> : <Typography>
          {Authors.map(autor => (
            autor
          ))}
        </Typography>}
        <div className={classes.icons} >
          <IconButton aria-label="pictureAsPdfIcon" >
            <img src={pdfIcon} alt="pdf icon" />
          </IconButton>
          <PopperContainer />
        </div>
        <hr />
      </Box>
    </Box>
  );
};

export default ItemComponent;
