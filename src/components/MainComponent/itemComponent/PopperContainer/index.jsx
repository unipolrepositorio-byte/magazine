import { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import { IconButton } from '@material-ui/core';
import face from '../../../../assets/icons/face.svg';
import wpp from '../../../../assets/icons/wpp.svg';
import tele from '../../../../assets/icons/tele.svg';
import link from '../../../../assets/icons/link.svg';
import useStyles from './PopperComponent.styles';



export default function PopperContainer() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('top');

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    console.log(newPlacement);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Box className={classes.box} >
            <Fade {...TransitionProps} timeout={1050} >
              <img src={wpp} alt="whatsapp icon" />
            </Fade>
            <Fade {...TransitionProps} timeout={700}>
              <img src={tele} alt="telegram icon" />
            </Fade>
            <Fade {...TransitionProps} timeout={350}>
              <img src={face} alt="facebook icon" />
            </Fade>
          </Box >

        )}
      </Popper>
      <Grid container justifyContent="center">
        <IconButton aria-label="" onClick={handleClick('top-end')}>
          <img src={link} alt="link icon" />
        </IconButton>
      </Grid>
    </Box>
  );
}