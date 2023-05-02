import { Link } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { Grid, IconButton, Slide } from '@mui/material';
import { useState, React } from 'react';
import useStyles from './menuComponent.styles';
import imageFooter from '../../assets/image/banner.jpg';
import CloseIcon from '@mui/icons-material/Close';
import ItemMenuDesktop from './itemMenuDesktop/index';
import ItemMenuMobile from "./itemMenuMobile";
import { ReactComponent as Hamburger } from '../../assets/image/hamburger.svg';
import { ReactComponent as SearchIcon } from '../../assets/image/buscador.svg';


const MenuComponent = ({ items }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className={classes.menuDesktop}>
                <Grid container >
                    <Grid item xs={2} />
                    <Grid item xs container className={classes.menuContainer}>
                        {items.map((item, index) => (
                            <Link key={index} to={item.to} className={classes.link}>
                                <ItemMenuDesktop label={item.name} variant='text' iconName={item.icon} />
                            </Link>
                        ))}
                    </Grid>
                    <Grid item xs={3} container className={classes.menuContainer}>
                        <Link to={'/content/strapi'} className={classes.link}>
                            <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'} />
                        </Link>
                        <Link to={'/register'} className={classes.link}>
                            <ItemMenuDesktop label='REGISTRARSE' variant={'contained'} />
                        </Link>
                    </Grid>
                    <Grid item xs={1} container className={classes.menuContainer}>
                        <IconButton>
                            <SearchIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>


            <div className={classes.menuMobile}>
                <Grid container >
                    <Grid xs={11} />
                    <Grid item xs={1} container className={classes.menuContainer}>
                        <IconButton>
                            <SearchIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className={classes.menuLoginMobile}>
                    <Link to={'/content/strapi'} className={classes.link}>
                        <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'} />
                    </Link>
                    <Link to={'/register'} className={classes.link}>
                        <ItemMenuDesktop label='REGISTRARSE' variant={'contained'} />
                    </Link>
                </Grid>
                <Slide direction="up" in={open} timeout={500}>
                    <div className={classes.containerMenuClosed}>
                        <SvgIcon className={classes.menuOpenerIcon} onClick={() => { setOpen(prev => !prev) }}>
                            <Hamburger />
                        </SvgIcon>
                    </div>
                </Slide>
                <Slide direction="up" in={!open} timeout={500}>
                    <Grid container className={classes.containerMenuOpened}>
                        <div className={classes.backgroundImage}>
                            <img alt='background' src={imageFooter} />
                        </div>
                        {items.map((item, index) => (
                            <Grid item xs>
                                <Link xs key={index} to={item.to} className={classes.link}>
                                    <ItemMenuMobile label={item.name} iconName={item.icon} />
                                </Link>
                            </Grid>
                        ))}
                        <Grid item xs={12} textAlign='center' >
                            <IconButton className={classes.menuCloseIcon} onClick={() => { setOpen(prev => !prev) }}>
                                <CloseIcon class={classes.closeIcon} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Slide>
            </div>
        </>
    )
}
export default MenuComponent;