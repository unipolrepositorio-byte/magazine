import { Link } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { Button, Grid, IconButton, Slide } from '@mui/material';
import { useState, useContext, React } from 'react';
import useStyles from './menuComponent.styles';
import imageFooter from '../../assets/image/banner.jpg';
import CloseIcon from '@mui/icons-material/Close';
import ItemMenuDesktop from './itemMenuDesktop/index';
import ItemMenuMobile from "./itemMenuMobile";
import { ReactComponent as Hamburger } from '../../assets/image/hamburger.svg';
import { ReactComponent as SearchIcon } from '../../assets/image/buscador.svg';
import { useLocation } from 'react-router-dom';

import { BanerContext } from '../../context/BanerContext';

const MenuComponent = ({ items }) => {
    const { searchInput, setSearchInput } = useContext(BanerContext);
    const classes = useStyles(searchInput);
    const [open, setOpen] = useState(true);
    const [volumeButton, setVolumeButton] = useState(false);
    const volumes = [];
    for (let i = 0; i <= 21; i++) {
        volumes.push(<Button variant='text'>{2023 + i}</Button>)
    }
    const location = useLocation().pathname;
    const handleSearchInput = () => {
        setSearchInput(!searchInput)
    }

    return (
        <>
            <div className={classes.menuDesktop}>
                <Grid container direction='column'>
                    <Grid item container>
                        <Grid item xs={2} />
                        <Grid item xs container className={classes.menuContainer}>
                            {items.map((item, index) => (
                                <Link key={index} to={item.to} className={classes.link}>
                                    <ItemMenuDesktop label={item.name} variant='text' iconName={item.icon} />
                                </Link>
                            ))}
                        </Grid>
                        {!searchInput && location === '/' ? <Grid item xs={3} container className={classes.menuContainer}>
                            <Link to={'/content/strapi'} className={classes.link}>
                                <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'} />
                            </Link>
                            <Link to={'/register'} className={classes.link}>
                                <ItemMenuDesktop label='REGISTRARSE' variant={'contained'} />
                            </Link>
                        </Grid> : <Grid item xs={3} container className={classes.menuContainerHidden}>
                            <Link to={'/content/strapi'} className={classes.link}>
                                <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'} />
                            </Link>
                            <Link to={'/register'} className={classes.link}>
                                <ItemMenuDesktop label='REGISTRARSE' variant={'contained'} />
                            </Link>
                        </Grid>}
                        <Grid item xs={1} container className={classes.menuContainer}>
                            <IconButton onClick={handleSearchInput} >
                                <SearchIcon className={classes.icon} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {location === '/volumes' &&
                        <Grid item container direction='column' alignItems='center' className={classes.buttonVolumes} rowGap={2}>
                            <Button variant='contained' onClick={() => { setVolumeButton(prev => !prev) }}>{volumeButton ? 'BOTON' : 'AÑO'}</Button>
                            {volumeButton && <Grid container rowGap={1}>
                                {volumes.map(item => {
                                    return (
                                        <Grid item >
                                            {item}
                                        </Grid>
                                    )
                                })}
                            </Grid>}
                        </Grid>
                    }
                </Grid>
            </div>


            <div className={classes.menuMobile}>
                <Grid container >
                    <Grid xs={11} />
                    <Grid item xs={1} container className={classes.menuContainer}>
                        <IconButton onClick={handleSearchInput} >
                            <SearchIcon className={classes.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className={classes.menuLoginMobile}>
                    {location === '/' && !searchInput ? <>
                        <Grid container justifyContent='space-evenly' alignItems='center'>
                            <Link to={'/content/strapi'} className={classes.link}>
                                <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'} />
                            </Link>
                            <Link to={'/register'} className={classes.link}>
                                <ItemMenuDesktop label='REGISTRARSE' variant={'contained'} />
                            </Link>
                        </Grid>
                    </> : null}
                    {location === '/volumes' && <>
                        <Grid container direction='column' alignItems='flex-start' className={classes.buttonVolumes} rowGap={2}>
                            <Button variant='contained' onClick={() => { setVolumeButton(prev => !prev) }}>{volumeButton ? 'BOTON' : 'AÑO'}</Button>
                            {volumeButton && <Grid container columns={{ xs: 14 }} rowGap={1} justifyContent='space-around'>
                                {volumes.map(item => {
                                    return (
                                        <Grid item xs>
                                            {item}
                                        </Grid>
                                    )
                                })}
                            </Grid>}
                        </Grid>
                    </>}

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
            </div >
        </>
    )
}
export default MenuComponent;