import useStyles from "./academicComponent.styles";
import logo from '../../assets/image/logo.png'
const FooterComponent = () => {
    const classes = useStyles();
    return <div className={classes.container}>
        <img src={logo}/>
        Av. Abel Iturralde, casi Esq. Haití, N° 1122, Zona Miraflores - La Paz Bolivia universidad.policial@unipol.edu.bo (+591) 2-228291.
    </div>
}
export default FooterComponent;