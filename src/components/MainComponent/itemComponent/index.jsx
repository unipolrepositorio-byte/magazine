import { IconButton, Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';
import { useNavigate } from 'react-router-dom';


const ItemComponent = ({ props, id }) => {
  const { title, date, brief, pdf, autors } = props;
  const classes = useStyles();
  const navigator = useNavigate();
  const dateFormat = (dateString) => {
    var date = new Date(`${dateString}T00:00:00`);
    var optionMonth = { month: 'long' };
    var optionDay = { day: 'numeric' };
    var optionYear = { year: 'numeric' };

    var month = date.toLocaleDateString('es-Es', optionMonth);
    month = month[0].toUpperCase() + month.slice(1);
    var day = date.toLocaleDateString('es-Es', optionDay);
    var year = date.toLocaleDateString('es-Es', optionYear).slice(2);

    const finalDate = `${month} ${day} | ${year}`;
    return finalDate
  }

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
