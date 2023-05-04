import { Grid } from '@material-ui/core';
import useStyles from './bannerComponent.styles';
import logo from '../../assets/image/logo.png';
import CarrouselBanner from '../CarrouselBanner';
import Collapse from '@mui/material/Collapse';

import { BanerContext } from '../../context/BanerContext';
import { useContext } from 'react';


const BannerComponent = ({ children }) => {
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

                <Grid xs={12} item className={classes.carrouselAreaDesktop}>
                    <div className={classes.containerCarrousel}>
                        <CarrouselBanner id={'C2'} />
                    </div>
                </Grid>
                <Grid xs={12} item className={classes.carrouselAreaMobile}>
                    <div className={classes.containerCarrousel}>
                        <CarrouselBanner id={'C1'} />
                    </div>
                </Grid>

            </Grid>

        </>

    )
}
export default BannerComponent;