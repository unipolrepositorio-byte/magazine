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
import pdfIcon from '../../../../assets/icons/pdf.svg'
import useStyles from './PopperComponent.styles';
import { sendSocialNetworks } from '../../../../utilities/sendSocialNetworks';

export default function PopperContainer({ uriArticle, title }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('top');

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        modifiers={[
          {
            name: 'flip',
            enabled: false,
            options: {
              altBoundary: false,
              rootBoundary: 'document',
              padding: 8,
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Box className={classes.box} >
            <Fade {...TransitionProps} timeout={1050}>
              <img src={wpp} alt="whatsapp icon" onClick={() => sendSocialNetworks(uriArticle, title, 'whatsapp')} />
            </Fade>
            <Fade {...TransitionProps} timeout={700}>
              <img src={tele} alt="telegram icon" onClick={() => sendSocialNetworks(uriArticle, title, 'telegram')} />
            </Fade>
            <Fade {...TransitionProps} timeout={350}>
              <img src={face} alt="facebook icon" onClick={() => sendSocialNetworks(uriArticle, title, 'facebook')} />
            </Fade>
          </Box >

        )}
      </Popper>
      <div >
        <Grid container className={classes.icons}>
          <IconButton className={classes.buttonIcon} aria-label="pictureAsPdfIcon" >
            <img src={pdfIcon} alt="pdf icon" />
          </IconButton>
          <IconButton className={classes.buttonIcon} aria-label="" onClick={handleClick('top')}>
            <img src={link} alt="link icon" />
          </IconButton>
        </Grid>
      </div>
    </Box>
  );
}