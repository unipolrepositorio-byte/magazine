import useStyles from './searchComponent.styles';
import { BanerContext } from '../../../context/BanerContext';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Collapse } from '@mui/material';

const SearchComponent = () => {
    const { searchInput } = useContext(BanerContext);
    const classes = useStyles();

    return (

        <div className={classes.wraper}  >
            <Collapse orientation="horizontal" in={searchInput}
                className={classes.collapse}>
                <div className={classes.container} >

                    <FormControl fullWidth
                        className={classes.formControl}
                        variant="standard">
                        <TextField className={classes.input} />
                    </FormControl>
                    <button
                        className={classes.button} >
                        buscar <ArrowForwardIosIcon />
                    </button>
                </div>

            </Collapse >
        </div>
    )
}

export default SearchComponent;