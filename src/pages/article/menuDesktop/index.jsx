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
import logo from '../../../assets/image/logo.png';
import { referencesFormat } from "../../../utilities/referencesFormat";
import textImage from '../../../assets/image/banner.jpg';

export const MenuDesktop = ({references, menu}) => {

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
        electronicAddress}) => {
        const final = referencesFormat({authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear});
        return(
        <Grid container direction="column" className={classes.referenceContainer}>
            <Grid item style={{position:'relative'}} >
                <div className={classes.indexReferences}>
                    <label>{index+1}</label>
                </div>
                <label>{final}</label><br/>
            </Grid>
            <Grid item>
                <Grid container className={classes.linkReferences}>
                    <Grid item>
                        <Link item><label>Go to reference </label></Link>
                    </Grid>
                    <Grid item>
                        <Link item to={electronicAddress}><label>Crossref </label></Link>
                    </Grid>
                    <Grid item>
                        <Link item><label>PubMed</label></Link>
                    </Grid>
                    <Grid item>
                        <Link item><label>Google Scholar</label></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        )
    }

    const handleClickScroll = (slug) => {
        const element = document.getElementById(slug);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [menuOption, setMenuOption] = useState(1);
    const [menuMediaOption, setMenuMediaOption] = useState(0);

    const classes = useStyles();

    return(
        <Grid container style={{position:'sticky', top:'0px'}} className={classes.menuDesktop}>
            <Grid item xs='auto' container direction="column" className={classes.menuContainer}>
                <Grid item className={classes.hamburguerIcon}>
                    <Button onClick={()=>{setMenuOption(1)}}>
                        <HamburgerIcon/>
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={()=>{setMenuOption(2)}}>
                        <PdfIcon/>
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={()=>{setMenuOption(3)}}>
                        <LinkIcon/>
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={()=>{setMenuOption(4)}}>
                        <ImageIcon/>
                    </Button>
                </Grid>
                <Grid item className={classes.itemMenu}>
                    <Button onClick={()=>{setMenuOption(5)}}>
                        <ImageIcon/>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs='auto' className={classes.subMenu}>
                <Collapse in={menuOption===1}>
                    <Grid container direction="column" className={classes.referencesContainer}>
                        <Grid item className={classes.referencesContainerLogo}>
                            <img src={logo}></img>
                        </Grid>
                        <Grid item>
                            <ul style={{paddingLeft:'50px'}}>
                                {menu?.data && menu?.data.map(item => {
                                            return <li><Link onClick={()=>{handleClickScroll(item.attributes.slug.trim())}}>{item.attributes.title}</Link></li>
                                        })}
                            </ul>
                        </Grid>
                    </Grid>
                </Collapse>
                <Collapse in={menuOption===2} >
                    <Grid container direction="column" className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label>DESCARGA</label>
                        </Grid>
                        
                        <Button >
                            <PdfIcon width={90} />
                        </Button>

                    </Grid>
                </Collapse>
                <Collapse in={menuOption===3} >
                    <Grid container className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label><LinkIcon/>COMPARTIR</label>
                        </Grid>
                        <Button >
                            <WhatsappIcon width={80} />
                        </Button>
                        <Button >
                            <TelegramIcon width={80} />
                        </Button>
                        <Button >
                            <FaceIcon width={80} />
                        </Button>
                    </Grid>
                </Collapse>
                <Collapse in={menuOption===4} >
                    <Grid container className={classes.panelMediaContainer}>
                        <Grid item container className={classes.titlePanelMedia}>
                            <Grid item>
                                <ImageIcon/>
                            </Grid>
                            <Grid item>
                                <label>MEDIA</label>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.menuPanelMedia}>
                        <Grid item xs={4}>
                            <Button onClick={()=>setMenuMediaOption(1)}>
                                FIGURA
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={{borderLeft:'1px solid #01461D', borderRight:'1px solid #01461D'}}>
                            <Button onClick={()=>setMenuMediaOption(2)}>
                                TABLA
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={()=>setMenuMediaOption(3)}>
                                OTROS
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.bodyPanelMedia}>
                        <Collapse in={menuMediaOption===1}>
                            <Grid container direction='column' className={classes.figureMedia}>
                                <Grid item>
                                    <img src={textImage}></img>
                                </Grid>
                                <Grid item>
                                    <Button>ABRIR IMAGEN</Button>
                                </Grid>
                                <Grid item>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error expedita voluptatibus excepturi officia hic perferendis omnis doloribus animi eius labore praesentium obcaecati repellat quos ad assumenda debitis, nemo aspernatur.</p>
                                </Grid>
                            </Grid>
                        </Collapse>
                        <Collapse in={menuMediaOption===2}>
                            <h1 style={{textAlign:'center'}}>TABLE AREA</h1>
                        </Collapse>
                        <Collapse in={menuMediaOption===3}>
                            <h1 style={{textAlign:'center'}}>OTHER AREA</h1>
                        </Collapse>
                    </Grid>
                </Collapse>
                <Collapse in={menuOption===5} >
                    <Grid container className={classes.panelContainer}>
                        <Grid item className={classes.titlePanel}>
                            <label><LinkIcon/>Referencias</label>
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