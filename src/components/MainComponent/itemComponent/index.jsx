import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./ItemComponent.styles";
const ItemComponent = ({ title, coverpage, abstract, autor, _id }) => {
  const uri = process.env.REACT_APP_API_URL;
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
      <div className={classes.portrait}>
        <img src={`${uri}/server/${coverpage}`} />
      </div>
      <div className={classes.content}>
        <Link to={`/detail/${_id}`}>
          <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
        </Link>
        <h3>Autor:</h3>
        <p dangerouslySetInnerHTML={{__html: autor}}></p>
        <p dangerouslySetInnerHTML={{__html: abstract}}></p>
      </div>
    </Paper>
  );
};

export default ItemComponent;
