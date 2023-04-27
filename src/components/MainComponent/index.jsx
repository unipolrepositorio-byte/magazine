import useStyles from './mainComponent.styles';
import ItemComponent from './itemComponent/index';
import article from '../../__mock__/article.json';

const MainComponent = ({ children }) => {

    const classes = useStyles();
    return <div className={classes.container}>
        {children}
        <ItemComponent props={article} />
        <ItemComponent props={article} />
    </div>
}
export default MainComponent;