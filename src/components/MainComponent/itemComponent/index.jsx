import { IconButton, Box } from '@material-ui/core';
import getEnvVariables from '../../../config/config';
import Typography from '@mui/material/Typography';
import useStyles from './ItemComponent.styles';
import PopperContainer from './PopperContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import { dateFormat } from '../../../utilities/dateFormat';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm';

const ItemComponent = ({ props, id }) => {

  const { strapiServer } = getEnvVariables();
  const { title, date, brief, pdf, autors } = props;
  console.log('autores ', autors)
  const location = useLocation();
  const URI_ARTICLE = `${strapiServer}/articles/${id}`;
  const classes = useStyles();
  const navigator = useNavigate();
  return (
    <Box className={classes.wrapper} >
      <Box className={classes.content}>
        <Typography>
          {dateFormat(date)}
        </Typography>
        <Typography variant="h2" onClick={() => { location.pathname === '/articles' ? navigator(`${id}`) : navigator(`/articles/${id}`) }}>
          {title}
        </Typography>
        {autors.data && autors.data.length > 1 ? <Typography>
          { autors.data && autors.data.map(autor => (
            autor.attributes.fullName + ' | '
          ))}
        </Typography> : <Typography><b>
          {autors.data && autors.data.map(autor => (
             autor.attributes.fullName
          ))}</b>
        </Typography>}
        <ReactMarkdown
           components={{ p: ({ children }) => <p className={classes.brief}>{children}</p> }}
                    children={brief}
                    remarkPlugins={[remarkGfm]}
        />
        
        <PopperContainer uriArticle={URI_ARTICLE} title={title} pdf={pdf} />
        <hr />
      </Box>
    </Box>
  );
};

export default ItemComponent;