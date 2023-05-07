import { Collapse, Grid } from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./article.styles";
import {ReactComponent as Icon} from '../../assets/icons/face.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/image/hamburger.svg';
import { ReactComponent as PdfIcon } from '../../assets/image/PDF.svg';
import { ReactComponent as LinkIcon } from '../../assets/image/link2.svg';
import { ReactComponent as ImageIcon } from '../../assets/image/imagen.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/image/whasap.svg';
import { ReactComponent as TelegramIcon } from '../../assets/image/telegram.svg';
import { ReactComponent as FaceIcon } from '../../assets/image/facebook.svg';
import logo from '../../assets/image/logo.png';
import ItemComponent from "../../components/MainComponent/itemComponent";
import { TitleArea } from "./TitleArea";
import { ReferencesArea } from "./ReferencesArea";
import { MenuMobile } from "./menuMobile";
import { MenuDesktop } from "./menuDesktop";


export const Article = () => {

    const data = require ('../../__mock__/articleExample.json').data.attributes;

    const auth = [];

    data.autors.data.map(item=>{
        auth.push(item.attributes.fullName)
    })


    const classes = useStyles();


    

    const FormatText = ({text}) => {
        const parrafos = text.split('\n\n');
        return(
            <>
                {
                    parrafos.map(item=>{
                        return(<p>{item}</p>)
                    })
                }
            </>
        )
    }

    return ( 
        <Grid container direction='column' className={classes.articleContainer}>
            <Grid item>
                <TitleArea date={data.date} title={data.title} autors={auth}/>
            </Grid>
            {/*-----MENU STICKY----- */}
            
            <MenuMobile/>

            <Grid item container >
                <Grid item container direction="column" xs className={`${classes.textArea}`} >
                    <Grid item>
                        <FormatText text={data.completeText}/>
                    </Grid>
                    <Grid item>
                        <ReferencesArea references={data.bibliographies.data}/>
                    </Grid>
                </Grid>
                <Grid item xs='auto'>
                    <MenuDesktop references={data.bibliographies.data}/>
                </Grid>
            </Grid>

            <Grid item >
                
            </Grid>
        </Grid>
    )
}