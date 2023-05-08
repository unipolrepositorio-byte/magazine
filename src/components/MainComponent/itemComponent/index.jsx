import { IconButton, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';


const ItemComponent = ({ props }) => {

  const { id, title, date, brief, pdf, autors } = props;
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
        {autors.data && autors.data.length > 1 ? <Typography>
          {autors.data && autors.data.map(autor => (
            autor.attributes.fullName + ' / '
          ))}
        </Typography> : <Typography>
          {autors.data && autors.data.map(autor => (
            autor.attributes.fullName
          ))}
        </Typography>}
        <PopperContainer />
        <hr />
      </Box>
    </Box>
  );
};

export default ItemComponent;
