import { useState } from 'react';
import useStyles from './searchComponent.styles';
import { BanerContext } from '../../../context/BanerContext';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
    const [dataSearch, setDataSearch] = useState('');
    const navigate = useNavigate();
    const { searchInput } = useContext(BanerContext);
    const classes = useStyles();
    const handleChange = (e) => {
        e.preventDefault();
        navigate(`/articles`, { state: dataSearch });
    }

    return (

        <div className={classes.wraper}  >
            <Collapse orientation="horizontal" in={searchInput}
                className={classes.collapse}>
                <form className={classes.container} >
                    <FormControl fullWidth
                        className={classes.formControl}
                        variant="standard">
                        <TextField className={classes.input} onChange={e => { setDataSearch(e.target.value) }} />
                    </FormControl>
                    <button
                        className={classes.button}
                        onClick={handleChange}
                    >
                        buscar <ArrowForwardIosIcon />
                    </button>
                </form>

            </Collapse >
        </div>
    )
}

export default SearchComponent;