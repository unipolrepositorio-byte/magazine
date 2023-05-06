import { Grid } from '@material-ui/core';
import useStyles from './bannerStatic.styles';
import logo from '../../assets/image/logo.png';
import imageBanner from '../../assets/image/banner2.png';
const BannerStaticComponent = () => {

  const classes = useStyles();
    return (
      <>
        <Grid container className={classes.bannerContainer}>
            <Grid xs={12} item  container className={classes.tittleArea}>
                <Grid item xs='auto' className={classes.logoContainer}>
                    <img alt='logo' src={logo} className={classes.logo}/>
                </Grid>
            </Grid>
            <Grid xs={12} item className={classes.imageAreaMobile}>
              <img src={imageBanner} className={classes.image}/>
            </Grid>
            <Grid xs={12} item className={classes.imageAreaDesktop}>
              <img src={imageBanner} className={classes.image}/>
            </Grid>
        </Grid>
      </>
    )
}

export default BannerStaticComponent