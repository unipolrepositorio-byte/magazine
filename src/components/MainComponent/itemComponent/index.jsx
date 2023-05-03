import { IconButton, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';


const ItemComponent = ({ props }) => {
  const { id, title, date, brief, pdf, authors } = props;

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
        {authors.length > 1 ? <Typography>
          {authors.map(author => (
            author + ' / '
          ))}
        </Typography> : <Typography>
          {authors.map(author => (
            author
          ))}
        </Typography>}
        <PopperContainer />
        <hr />
      </Box>
    </Box>
  );
};

export default ItemComponent;
