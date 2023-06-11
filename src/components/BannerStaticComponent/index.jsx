import { Grid } from '@material-ui/core';
import useStyles from './bannerStatic.styles';
import logo from '../../assets/image/logo.png';
import imageBanner from '../../assets/image/mainBanner.jpeg';
import Collapse from '@mui/material/Collapse';

import { BanerContext } from '../../context/BanerContext';
import { useContext } from 'react';

const BannerStaticComponent = () => {
  const { searchInput } = useContext(BanerContext);
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.bannerContainer}>
        <Grid className={classes.searcheDesktop}>
          <Grid xs={12} item container className={classes.tittleArea}>
            <Grid item xs='auto' className={classes.logoContainer}>
              <img alt='logo' src={logo} className={classes.logo} />
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.searchMovile}>
          <Collapse direction='down' in={!searchInput}
            className={classes.collapse}
            timeout={500}>
            <Grid xs={12} item container className={classes.tittleArea}>
              <Grid item xs='auto' className={classes.logoContainer}>
                <img alt='logo' src={logo} className={classes.logo} />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
        <Grid xs={12} item className={classes.imageAreaMobile}>
          <img src={imageBanner} className={classes.image} />
        </Grid>
        <Grid xs={12} item className={classes.imageAreaDesktop}>
          <img src={imageBanner} className={classes.image} />
        </Grid>
      </Grid>
    </>
  )
}

export default BannerStaticComponent