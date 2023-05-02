import useStyles from './searchComponent.styles';
import { BanerContext } from '../../../context/BanerContext';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SearchComponent = () => {
    const { searchInput } = useContext(BanerContext);
    const classes = useStyles();

    return (
        <div className={classes.wraper} >
            {searchInput ? <div className={classes.container} >
                <>
                    <FormControl fullWidth
                        className={classes.formControl}
                        variant="standard">
                        <TextField className={classes.input} />
                    </FormControl>
                    <button
                        className={classes.button} >
                        buscar <ArrowForwardIosIcon />
                    </button>
                </>
            </div> : null}

        </div>
    )
}

export default SearchComponent;