import { useStyles } from './footer.styles';
import logo from '../../assets/image/logo.png'
import { Grid } from '@material-ui/core';
import { border, borderRight } from '@mui/system';
import { ReactComponent as FaceLogo } from '../../assets/image/facebook.svg';
import { ReactComponent as MapLogo } from '../../assets/image/ubicacion.svg';
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
    
    const navigator = useNavigate();
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item container className={classes.desktopContainer}>
                <Grid item xs={8} container className={classes.optionsArea}>
                    <Grid item xs className={classes.logoContainer}>
                        <img src={logo}/>
                    </Grid>
                    <Grid item xs container direction='column' className={classes.firstOptionArea}>
                        <Grid item xs={6}>
                            <label className={classes.title}>RECURSOS</label>
                        </Grid>
                        <Grid item container>
                            <Grid item xs>
                                <li onClick={()=>{navigator('/articles')}}><span>ARTICULOS</span></li>
                            </Grid>
                            <Grid item xs>
                                <li onClick={()=>{navigator('/volumes')}}><span>VOLÚMENES</span></li>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs container direction='column' className={classes.secondOptionArea}>
                        <Grid item xs={6}>
                            <label className={classes.title}>PAGINA</label>
                        </Grid>
                        <Grid item container>
                            <Grid item xs>
                                <li onClick={()=>{navigator('/')}}><span>UNIPOL.EDU.BO</span></li>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs container className={classes.contactArea} alignItems='flex-end'>
                    <Grid item xs container className={classes.wraperContactArea}>
                        <Grid item xs className={classes.firstContact}>
                            <label onClick={()=>{}}>UBICACIÓN</label>
                            <MapLogo/>
                        </Grid>
                        <Grid item xs className={classes.secondContact}>
                            <label onClick={()=>{}}>SÍGUENOS EN</label>
                            <FaceLogo/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item container direction='column' className={classes.mobileContainer}>
                <Grid item className={classes.logoContainerMobile}>
                    <img src={logo}/>
                </Grid>
                <Grid item container className={classes.optionsAreaMobile}>
                    <Grid item xs container className={classes.itemOptionMobile}>
                        <Grid item className={classes.titleMobile}>
                            <label >RECURSOS</label>
                        </Grid>
                        <Grid item>
                            <ul>
                                <li onClick={()=>{navigator('/articles')}}><span>ARTICULOS</span></li>
                                <li onClick={()=>{navigator('/volumes')}}><span>VOLÚMENES</span></li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs className={classes.itemOptionMobile}>
                        <Grid item className={classes.titleMobile}>
                            <label >PAGINA</label>
                        </Grid>
                        <Grid item>
                            <ul>
                                <li onClick={()=>{navigator('/#')}}><span>UNIPOL.EDU.BO</span></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.contactAreaMobile}>
                    <Grid item xs className={classes.itemContactAreaMobile}>
                        <label onClick={()=>{}}>UBICACIÓN</label>
                        <MapLogo/>
                    </Grid>
                    <Grid item xs ='auto' className={classes.itemContactAreaMobile}>
                        <label onClick={()=>{}}>SÍGUENOS EN</label>
                        <FaceLogo/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>    
    )
}
export default FooterComponent;