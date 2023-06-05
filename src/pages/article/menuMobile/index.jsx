import { Collapse, Grid, Button } from "@material-ui/core";
import { useStyles } from "./menuMobile.styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from '../../../assets/image/hamburger.svg';
import { ReactComponent as PdfIcon } from '../../../assets/image/PDF.svg';
import { ReactComponent as LinkIcon } from '../../../assets/image/link2.svg';
import { ReactComponent as ImageIcon } from '../../../assets/image/imagen.svg';
import { ReactComponent as WhatsappIcon } from '../../../assets/image/whasap.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/image/telegram.svg';
import { ReactComponent as FaceIcon } from '../../../assets/image/facebook.svg';
import { ReactComponent as ReferencesIcon } from '../../../assets/image/R.svg';
import logo from '../../../assets/image/logo.png';
import { sendSocialNetworks } from "../../../utilities/sendSocialNetworks";
import { PopUp } from "../../../components/popup";

export const MenuMobile = ({ menu, images, tables, uri, title }) => {

    const [menuOption, setMenuOption] = useState(0);
    const [toggleReferences, setToggleReferences] = useState(false);
    const [toggleMedia, setToogleMedia] = useState(false);
    const [menuMediaOption, setMenuMediaOption] = useState(0);
    const [popup, setPopup] = useState(false);
    const [popupSource, setPopupSource] = useState('');



    const handleMediaMenu = (value) => {
        if (value === 3) {
            setMenuOption(3)
        } else {
            setMenuOption(value);
            setToogleMedia(false);
        }
    }

    const classes = useStyles();

    const handleClickScroll = (slug) => {
        const element = document.getElementById(slug);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };


    return (
        <Grid item container direction='column' className={classes.container}>
            <Grid item container className={classes.menuStickyContainer}>

                {/*-----BUTTON HAMBURGER----- */}
                <Grid item xs='auto' className={classes.menuButton} onClick={() => { setToggleReferences(prev => !prev) }}>
                    <HamburgerIcon />
                </Grid>

                {/*-----OPTIONS MENU----- */}
                <Grid item xs container className={classes.menuOptions}>
                    <Grid item xs className={menuOption === 1 ? 'active' : ''} onClick={() => { handleMediaMenu(1) }}>
                        <PdfIcon />
                    </Grid>
                    <Grid item xs className={menuOption === 2 ? 'active' : ''} onClick={() => { handleMediaMenu(2) }}>
                        <LinkIcon />
                    </Grid>
                    <Grid item xs className={menuOption === 3 ? 'active' : ''} onClick={() => { handleMediaMenu(3) }}>
                        <ImageIcon />
                    </Grid>
                    <Grid item xs className={menuOption === 4 ? 'active' : ''} onClick={() => { handleClickScroll('referencesArea') }}>
                        <ReferencesIcon />
                    </Grid>
                </Grid>

                {/*-----PANEL MENU----- */}
                <Grid item xs={6} className={classes.menuPanel}>
                    {
                        <Collapse in={menuOption === 1 ? true : false} className={classes.panelItem1}>
                            <PdfIcon />
                            <label>DESCARGAR</label>
                        </Collapse>}
                    {
                        <Collapse in={menuOption === 2 ? true : false}>
                            <Grid container className={classes.panelItem1}>
                                <Grid item xs >
                                    <LinkIcon />
                                </Grid>
                                <Grid item xs onClick={() => sendSocialNetworks(uri, title, 'whatsapp')}>
                                    <WhatsappIcon />
                                </Grid>
                                <Grid item xs onClick={() => sendSocialNetworks(uri, title, 'telegram')}>
                                    <TelegramIcon />
                                </Grid>
                                <Grid item xs onClick={() => sendSocialNetworks(uri, title, 'facebook')}>
                                    <FaceIcon />
                                </Grid>
                            </Grid>
                        </Collapse>}
                    {
                        <Collapse in={menuOption === 3 ? true : false} className={classes.panelItem1} onClick={() => { setToogleMedia(prev => !prev) }}>
                            <ImageIcon />
                            <label>MEDIA</label>
                        </Collapse>}
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item xs={3}>
                    <Collapse xs={3} in={toggleReferences} style={{ position: 'absolute', top: '41px', zIndex: '1' }}>
                        <Grid container direction="column" className={classes.menuReferences}>
                            <Grid item style={{ height: '25px' }}>
                                <img src={logo} style={{ height: '100%' }}></img>
                            </Grid>
                            <Grid item>
                                <ul>
                                    <Grid container direction='column' className={classes.menuReferencesList}>
                                        {menu?.data && menu?.data.map(item => {
                                            return <Grid item>
                                                <li>
                                                    <Link onClick={() => { handleClickScroll(item.attributes.slug.trim()) }}>
                                                        {item.attributes.title}
                                                    </Link>
                                                </li>
                                            </Grid>
                                        })}
                                    </Grid>
                                </ul>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs={12}>
                    <Collapse in={toggleMedia} style={{ position: 'absolute', top: '41px' }}>
                        <Grid contaner direction="column" className={classes.menuMedia}>
                            <Grid item container justifyContent="center">
                                <Grid item xs={4} className={classes.optionMenuMedia}>
                                    <Button onClick={() => setMenuMediaOption(1)}>
                                        FIGURA
                                    </Button>
                                </Grid>
                                <Grid item xs={4} className={classes.optionMenuMedia} style={{ borderLeft: '1px solid #01461D', borderRight: '1px solid #01461D' }}>
                                    <Button onClick={() => setMenuMediaOption(2)}>
                                        TABLA
                                    </Button>
                                </Grid>
                                <Grid item xs={4} className={classes.optionMenuMedia}>
                                    <Button onClick={() => setMenuMediaOption(3)}>
                                        OTROS
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.bodyPanelMedia}>
                                <Collapse in={menuMediaOption === 1}>
                                    <Grid container direction='column'>
                                        {
                                            images.data.map(item => {
                                                return <Grid item container direction="column" className={classes.figureMedia}>
                                                    <Grid item>
                                                        <img src={item.attributes.source}></img>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button onClick={() => {
                                                            setPopup(prev => !prev);
                                                            setPopupSource(item.attributes.source);
                                                        }}>
                                                            ABRIR IMAGEN
                                                        </Button>
                                                        <PopUp open={popup} close={() => { setPopup(false) }} src={popupSource} />
                                                    </Grid>
                                                    <Grid item>
                                                        <p>{item.attributes.description}</p>
                                                    </Grid>
                                                </Grid>
                                            })
                                        }
                                    </Grid>
                                </Collapse>
                                <Collapse in={menuMediaOption === 2}>
                                    <Grid container direction="column">
                                        {
                                            tables.data.map((item, index) => {
                                                return <Grid item container direction='column' className={classes.tableMedia}>
                                                    <Grid item>
                                                        <h3>{`${index + 1}. ${item.attributes.title}`}</h3>
                                                    </Grid>
                                                    <Grid item>
                                                        <label>{item.attributes.legend}</label>
                                                    </Grid>
                                                </Grid>

                                            })
                                        }
                                    </Grid>
                                </Collapse>
                                <Collapse in={menuMediaOption === 3}>
                                    {/*
                                        Other Area
                                    */}
                                </Collapse>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </Grid>
    )
}