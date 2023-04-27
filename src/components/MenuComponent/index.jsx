import { Link } from 'react-router-dom';
import useStyles from './menuComponent.styles';
import React from 'react'
import { SvgIcon } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, IconButton } from '@mui/material';
import ItemMenuDesktop from './itemMenuDesktop/index';
import { Slide } from '@mui/material';
import logoFooter from '../../assets/image/banner.jpg';
import ItemMenuMobile from "./itemMenuMobile";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MenuComponent = ({items}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    return (
    <>
        <div className={classes.menuDesktop}>
            <Grid container >
                <Grid item xs={2}/>
                <Grid item xs container className={classes.menuContainer}>
                    {
                        items.map((item, index) => (
                            <Link key={index} to={item.to} className={classes.link}>
                                <ItemMenuDesktop label={item.name} variant='text' icon/>
                            </Link>
                        ))
                    }
                </Grid>

                <Grid item xs={3} container className={classes.menuContainer}>
                <ItemMenuDesktop label='INICIAR SESION' variant={'outlined'}/>
                <ItemMenuDesktop label='REGISTRARSE' variant={'contained'}/>
                </Grid>

                <Grid item xs={1} container className={classes.menuContainer}>
                <IconButton className={classes.iconContainer}>
                    <SearchIcon/>
                </IconButton>
                </Grid>
            </Grid>
        </div>


        <div className={classes.menuMobile}>
            <Grid container >
                <Grid xs={11}/>
                <Grid item xs={1}  container className={classes.menuContainer}>
                    <IconButton className={classes.iconContainer}>
                        <SearchIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Slide direction="up" in={open} timeout={500}>
                <div className={classes.containerMenuClosed}>
                    <SvgIcon className={classes.menuOpenerIcon} onClick={()=>{setOpen(prev=>!prev)}}>
                        <MenuIcon/>
                    </SvgIcon>
                </div>
            </Slide>
            <Slide direction="up" in={!open} timeout={500}>
                <Grid container className={classes.containerMenuOpened}>
                    <div className={classes.backgroundImage}>
                        <img alt='background' src={logoFooter}/>
                    </div>
                    {
                        items.map((item, index) => (
                            <Grid item xs>
                                <Link xs key={index} to={item.to} className={classes.link}>
                                    <ItemMenuMobile label={item.name}/>
                                </Link>
                            </Grid>
                        ))
                    }
                    <Grid item xs = {12} textAlign='center' >
                        <SvgIcon className={classes.menuCloseIcon} onClick={()=>{setOpen(prev=>!prev)}}>
                            <CloseIcon/>
                        </SvgIcon>
                    </Grid>
                </Grid>
            </Slide>
        </div>
    </>
    )
}
export default MenuComponent;