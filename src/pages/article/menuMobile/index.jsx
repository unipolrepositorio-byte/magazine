import { Collapse, Grid } from "@material-ui/core";
import { useStyles } from "./menuMobile.styles";
import { useState } from "react";
import { ReactComponent as HamburgerIcon } from '../../../assets/image/hamburger.svg';
import { ReactComponent as PdfIcon } from '../../../assets/image/PDF.svg';
import { ReactComponent as LinkIcon } from '../../../assets/image/link2.svg';
import { ReactComponent as ImageIcon } from '../../../assets/image/imagen.svg';
import { ReactComponent as WhatsappIcon } from '../../../assets/image/whasap.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/image/telegram.svg';
import { ReactComponent as FaceIcon } from '../../../assets/image/facebook.svg';
import logo from '../../../assets/image/logo.png';
import ItemComponent from "../../../components/MainComponent/itemComponent";

export const MenuMobile = () => {

    const [menuOption, setMenuOption] = useState(0);
    const [toggleReferences, setToggleReferences] = useState(false);
    const [toggleMedia, setToogleMedia] = useState (false);

    const handleMediaMenu = (value) => {
        if(value===3){
            setMenuOption(3)
        }else{
            setMenuOption(value);
            setToogleMedia(false);
        }
    }

    const classes = useStyles();

    return (
        <Grid item container direction='column' className={classes.container}>
            <Grid item  container className={classes.menuStickyContainer}>

                {/*-----BUTTON HAMBURGER----- */}
                <Grid item xs='auto' className={classes.menuButton} onClick={()=>{setToggleReferences(prev => !prev)}}>
                    <HamburgerIcon/>
                </Grid>

                {/*-----OPTIONS MENU----- */}
                <Grid item xs container className={classes.menuOptions}>
                    <Grid item xs className={menuOption===1?'active':''} onClick={()=>{handleMediaMenu(1)}}>
                        <PdfIcon />
                    </Grid>
                    <Grid item xs className={menuOption===2?'active':''} onClick={()=>{handleMediaMenu(2)}}>
                        <LinkIcon/>
                    </Grid>
                    <Grid item xs className={menuOption===3?'active':''} onClick={()=>{handleMediaMenu(3)}}>
                        <ImageIcon/>
                    </Grid>
                    <Grid item xs className={menuOption===4?'active':''} onClick={()=>{handleMediaMenu(4)}}>
                        <ImageIcon/>
                    </Grid>
                </Grid>

                {/*-----PANEL MENU----- */}
                <Grid item xs={6} className={classes.menuPanel}>
                    {
                    <Collapse in={menuOption===1?true:false} className={classes.panelItem1}>
                        <PdfIcon/>
                        <label>DESCARGAR</label>
                    </Collapse>}
                    {
                    <Collapse in={menuOption===2?true:false}>
                        <Grid container className={classes.panelItem1}>
                            <Grid item xs>
                                <LinkIcon/>
                            </Grid>
                            <Grid item xs>
                                <WhatsappIcon/>
                            </Grid>
                            <Grid item xs>
                                <TelegramIcon/>
                            </Grid>
                            <Grid item xs>
                                <FaceIcon/>
                            </Grid>
                        </Grid>
                    </Collapse>}
                    {
                    <Collapse in={menuOption===3?true:false} className={classes.panelItem1} onClick={()=>{setToogleMedia(prev => !prev)}}>
                        <ImageIcon/>
                        <label>MEDIA</label>
                    </Collapse>}
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item xs={3}>
                    <Collapse xs={3} in={toggleReferences} style={{position:'absolute',top:'41px'}}>
                            <Grid container direction="column" className={classes.menuReferences}>
                                <Grid item style={{height:'25px', background:'white'}}>
                                    <img src={logo} style={{height:'100%'}}></img>
                                </Grid>
                                <Grid item>
                                    <ul style={{paddingLeft:'30px'}}>
                                        <li>first</li>
                                        <li>second</li>
                                        <li>third</li>
                                    </ul>
                                </Grid>
                            </Grid>
                    </Collapse>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                    <Collapse in={toggleMedia} style={{position:'absolute',top:'41px'}}>
                        <Grid contaner direction="column" className={classes.menuMedia}>
                            <Grid item container justifyContent="center">
                                <Grid item xs={4} className={classes.optionMenuMedia}>
                                    <label >Figura</label>
                                </Grid>
                                <Grid item xs={4} className={classes.optionMenuMedia} style={{borderLeft:'1px solid #01461D', borderRight:'1px solid #01461D'}}>
                                    <label>Tabla</label>
                                </Grid>
                                <Grid item xs={4} className={classes.optionMenuMedia}>
                                    <label>Otros</label>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>
    )
}