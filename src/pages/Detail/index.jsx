import DetailComponent from "../../components/DetailComponent";
import useStyles from "./detail.styles";

const Detail = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
      <DetailComponent />
      </div>
    </div>
  );
};
export default Detail;
