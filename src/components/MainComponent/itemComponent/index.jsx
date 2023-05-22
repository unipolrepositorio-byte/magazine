import { IconButton, Box } from '@material-ui/core';

import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';
import { useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../utilities/dateFormat';


const ItemComponent = ({ props, id }) => {
  const { title, date, brief, pdf, autors } = props;
  const classes = useStyles();
  const navigator = useNavigate();

  return (
    <Box className={classes.wrapper} >
      <Box className={classes.content}>
        <Typography>
          {dateFormat(date)}
        </Typography>
        <Typography variant="h4" onClick={() => { navigator(`${id}`) }}>
          {title}
        </Typography>
        <Typography variant="h5">
          {brief}
        </Typography>
        {autors && <>
          {autors.data && autors.data.length > 1 ? <Typography>
            {autors.data && autors.data.map(autor => (
              autor.attributes.fullName + ' / '
            ))}
          </Typography> : <Typography>
            {autors.data && autors.data.map(autor => (
              autor.attributes.fullName
            ))}
          </Typography>}
        </>}
        <PopperContainer />
        <hr />
      </Box>
    </Box>
  );
};

export default ItemComponent;
