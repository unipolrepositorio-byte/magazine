import { Grid } from "@material-ui/core";
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./article.styles";
import { TitleArea } from "./TitleArea";
import { ReferencesArea } from "./ReferencesArea";
import { MenuMobile } from "./menuMobile";
import { MenuDesktop } from "./menuDesktop";
import articleService from "../../async/services/articleService";
import { TextArea } from "./textArea";

export const Article = () => {

    ///const data = require('../../__mock__/articleExample.json');

    const { id } = useParams();
    const classes = useStyles();
    const [data, setData] = useState();

    const loadData = async () => {
        const response = await articleService(id);
        setData(response);
    }
    useEffect(()=>{loadData()},[])
    

    return ( 
    data&&<Grid container direction='column' className={classes.articleContainer}>
        <Grid item>
            <TitleArea
                date={data.data.attributes.date} 
                title={data?.data?.attributes?.title} 
                autors={data?.data?.attributes?.autors?.data}
                volume={data?.data?.attributes?.volume?.data}
            />
        </Grid>

        <MenuMobile 
            menu={data?.data?.attributes?.menus} 
            images={data?.data?.attributes?.images}
            tables={data?.data?.attributes?.tables}
        />

        <Grid item container style={{}}>
            <Grid 
                item 
                xs 
                container 
                direction="column" 
                className={`${classes.textArea}`}
                style={{overflow:'auto hidden'}}
            >
                <Grid item style={{width:'100%'}}>
                    <TextArea text={data?.data?.attributes?.completeText}/>
                </Grid>
                <Grid item>
                    <ReferencesArea references={data?.data?.attributes?.bibliographies.data}/>
                </Grid>
            </Grid>
            <Grid item xs='auto'>
                <MenuDesktop 
                    references={data?.data?.attributes?.bibliographies.data} 
                    menu={data?.data?.attributes?.menus} 
                    images={data?.data?.attributes?.images}
                    tables={data?.data?.attributes?.tables}
                />
            </Grid>
        </Grid>
    </Grid>
    )
}