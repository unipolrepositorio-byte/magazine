import useForm from '../../hooks/useForm';
import useStyles from './searchComponent.styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const SearchComponent = ({ handlerOnSubmit }) => {
    const classes = useStyles();
    const {form, handlerChangeForm, handlerResetForm} = useForm({searchcriterion: ''});
    const navigation = useNavigate();
    const onSubmitForm = (event) => {
        event.preventDefault();
        navigation(`/find/search?searchcriterion=${form.searchcriterion}`);
        handlerResetForm();
    };
    return (
        <div className={classes.wrapper}>
            <form onSubmit={onSubmitForm}>
                <div className={classes.searchIconWrapper}>
                    <SearchIcon className={classes.searchIcon}/>
                </div>
                <input type="text" className={classes.inputBase} name="searchcriterion" onChange={handlerChangeForm} value={form.searchcriterion} placeholder="Buscador..."/>
            </form>
        </div>
    )
}
export default SearchComponent;