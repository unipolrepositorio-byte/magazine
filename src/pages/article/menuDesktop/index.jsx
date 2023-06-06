import { Button, Collapse, Grid } from "@material-ui/core";
import { useStyles } from "./menuDesktop.styles";
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
import { referencesFormat } from "../../../utilities/referencesFormat";
import { PopUp } from "../../../components/popup";
import getEnvVariables from '../../../config/config';

const handleClickScroll = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};


const Reference = ({
    authorInitial,
    authorLastName,
    publicationTitle,
    editorInitials,
    editorLastName,
    volume,
    pages,
    publicationYear,
    index,
    electronicAddress }) => {

    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(1);

    const goToNextReference = (idReference) => {
        const element = document.getElementById(`r${idReference}-${(currentIndex + 1)}`);
        if (element !== null) {
            handleClickScroll(`r${idReference}-${currentIndex}`);
            setCurrentIndex(prev => prev + 1);
        } else {
            handleClickScroll(`r${idReference}-${currentIndex}`);
            setCurrentIndex(1);
        }
    }
    const final = referencesFormat({ authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear });
    return (
        <Grid container direction="column" className={classes.referenceContainer}>
            <Grid item style={{ position: 'relative' }} >
                <div className={classes.indexReferences}>
                    <label>{index + 1}</label>
                </div>
                <label>{final}</label><br />
            </Grid>
            <Grid item>
                <Grid container className={classes.linkReferences}>
                    <Grid item>
                        <Link item onClick={() => { goToNextReference(index + 1) }}><label>Go to reference </label></Link>
                    </Grid>
                    <Grid item>
                        <Link item to={electronicAddress}><label>Crossref </label></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



export const MenuDesktop = ({ references, menu, images, tables, uri, title, pdf }) => {

    const [menuOption, setMenuOption] = useState(1);
    const [menuMediaOption, setMenuMediaOption] = useState(0);
    const [popup, setPopup] = useState(false);
    const [popupSource, setPopupSource] = useState('');
    const { strapiServer, strapiServerPort } = getEnvVariables();
    const uriPdf = pdf.data ? `${strapiServer}:${strapiServerPort}${pdf.data[0].attributes.url}` : strapiServer
    const downloadArticle = () => {
        window.open(uriPdf, '_blank');
    }
    const classes = useStyles();
    return (
        <Grid container style={{ position: 'sticky', top: '0px', flexWrap: 'nowrap' }} className={classes.menuDesktop}>
            <Grid item xs='auto' container direction="column" className={classes.menuContainer}>
                <Grid item className={classes.hamburguerIcon}>
                    <Button onClick={() => { setMenuOption(1) }}>
                        <HamburgerIcon />
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={() => { setMenuOption(2) }}>
                        <PdfIcon />
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={() => { setMenuOption(3) }}>
                        <LinkIcon />
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={() => { setMenuOption(4) }}>
                        <ImageIcon />
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={() => { setMenuOption(5) }}>
                        <ReferencesIcon />
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs='auto' className={classes.subMenu}>
                <Collapse in={menuOption === 1}>
                    <Grid container direction="column" className={classes.referencesContainer}>
                        <Grid item className={classes.referencesContainerLogo}>
                            <img src={logo}></img>
                        </Grid>
                        <Grid item>
                            <ul style={{ paddingLeft: '50px' }}>
                                {menu?.data && menu?.data.map((item, index) => {
                                    return <li key={index}><Link onClick={() => { handleClickScroll(item.attributes.slug.trim()) }}>{item.attributes.title}</Link></li>
                                })}
                            </ul>
                        </Grid>
                    </Grid>
                </Collapse>
                <Collapse in={menuOption === 2} >
                    <Grid container direction="column" className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label>DESCARGA</label>
                        </Grid>

                        <Button onClick={downloadArticle} >
                            <PdfIcon width={90} />
                        </Button>

                    </Grid>
                </Collapse>
                <Collapse in={menuOption === 3} >
                    <Grid container className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label><LinkIcon />COMPARTIR</label>
                        </Grid>
                        <Button onClick={() => sendSocialNetworks(uri, title, 'whatsapp')} >
                            <WhatsappIcon width={80} />
                        </Button>
                        <Button onClick={() => sendSocialNetworks(uri, title, 'telegram')} >
                            <TelegramIcon width={80} />
                        </Button>
                        <Button onClick={() => sendSocialNetworks(uri, title, 'facebook')} >
                            <FaceIcon width={80} />
                        </Button>
                    </Grid>
                </Collapse>
                <Collapse in={menuOption === 4} >
                    <Grid container className={classes.panelMediaContainer}>
                        <Grid item container className={classes.titlePanelMedia}>
                            <Grid item>
                                <ImageIcon />
                            </Grid>
                            <Grid item>
                                <label>MEDIA</label>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.menuPanelMedia}>
                        <Grid item xs={4}>
                            <Button onClick={() => setMenuMediaOption(1)}>
                                FIGURA
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={{ borderLeft: '1px solid #01461D', borderRight: '1px solid #01461D' }}>
                            <Button onClick={() => setMenuMediaOption(2)}>
                                TABLA
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={() => setMenuMediaOption(3)}>
                                OTROS
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.bodyPanelMedia}>
                        <Collapse in={menuMediaOption === 1}>
                            <Grid container direction='column'>
                                {
                                    images.data.map((item, index) => {
                                        return <Grid key={index} item container direction="column" className={classes.figureMedia}>
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
                                            </Grid>
                                            <PopUp open={popup} close={() => { setPopup(false) }} src={popupSource} />
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
                                        return <Grid key={index} item container direction='column' className={classes.tableMedia}>
                                            <Grid item>
                                                <h2>{`${index + 1}. ${item.attributes.title}`}</h2>
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
                </Collapse>
                <Collapse in={menuOption === 5} >
                    <Grid container className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label><LinkIcon />Referencias</label>
                        </Grid>
                        <Grid item container>
                            {references && references.map((item, index) => {
                                return (
                                    <Reference
                                        key={index}
                                        authorInitial={item.attributes.authorInitials}
                                        authorLastName={item.attributes.authorLastName}
                                        publicationTitle={item.attributes.publicationTitle}
                                        editorInitials={item.attributes.editorInitials}
                                        editorLastName={item.attributes.editorLastName}
                                        volume={item.attributes.volume}
                                        pages={item.attributes.pages}
                                        publicationYear={item.attributes.publicationYear}
                                        index={index}
                                        electronicAddress={item.attributes.electronicAddress}
                                    />)
                            })}
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
    )
}