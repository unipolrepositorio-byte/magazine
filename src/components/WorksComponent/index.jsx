import ItemComponent from "./itemComponent";
import useStyles from "./worksComponent.styles";

const WorksComponent = () => {
    const classes = useStyles();
    return <div className={classes.wrapper}>
        <h2>Documentos</h2>
        <div className={classes.grid}>
            <ItemComponent label="Perfil" icon="school" route="perfil"/>
            <ItemComponent label="Tesis" icon="book" route="tesis"/>
            <ItemComponent label="Proyecto de Grado" icon="copy" route="grade-project"/>
            <ItemComponent label="Monografia" icon="article" route="monografia"/>
        </div>
        <h2>Unidades Académicas</h2>
        <div className={classes.grid}>
            <ItemComponent label="Fatescipol" icon="fatescipol" route="fatescipol"/>
            <ItemComponent label="Anapol" icon="anapol" route="anapol"/>
            <ItemComponent label="Cefotes" icon="cefotes" route="cefotes"/>
            <ItemComponent label="Escuela Superior de Policias" icon="esp" route="esp" />
        </div>
    </div>
}
export default WorksComponent;