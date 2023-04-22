import { Paper } from "@material-ui/core";
import useStyles from "./detailComponent.styles";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useParams } from "react-router-dom";
import getDocument from "../../async/services/getDocument";
import { useEffect, useState } from "react";
const DetailComponent = () => {
    const { id } = useParams();
    console.log('uri data ', document.location.href)
    const [data, setData] = useState({uri: document.location.href});
    console.log(data);
    const uri = process.env.REACT_APP_API_URL;
    useEffect(() => {
        getData(id);
    }, []);
    const getData = async(id) => {
        await getDocument(id).then(response => {
            console.log(response);
            setData({...data, ...response});
        });
    }
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Paper className={classes.wrapper}>
          <div className={classes.portrait}>
            <img src={`${uri}/server${data.coverpage}`} />
            <div>
              <PictureAsPdfIcon />
              <a href={`${uri}/server/viewdoc/${data.md5}`}> Descargar </a>
            </div>
          </div>
          <div className={classes.content}>
            <h2>
              {data.title}
            </h2>
            <h3>Autor:</h3>
            <p>{data.autor}</p>
            <br />
            <h3>Tutor:</h3>
            <p>{data.tutor}</p>
            <br />
            <h3>Abstract:</h3>
            <p>
              {data.abstract}
            </p>
            <br />
            <h3>uri:</h3>
            <p>{data.uri}</p>
            <div className={classes.download}>
              <PictureAsPdfIcon />
              <a href={`${uri}/server/viewdoc/${data.md5}`}> Descargar </a>
            </div>
            <br />
            <h3>Unidad:</h3>
            <p>
                {data.unidad}
            </p>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default DetailComponent;
