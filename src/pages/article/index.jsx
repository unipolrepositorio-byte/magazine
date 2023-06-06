import { Grid } from "@material-ui/core";
import { useState, useEffect, React } from "react";
import { useLocation, useParams } from "react-router-dom";
import useStyles from "./article.styles";
import { TitleArea } from "./TitleArea";
import { ReferencesArea } from "./ReferencesArea";
import { MenuMobile } from "./menuMobile";
import { MenuDesktop } from "./menuDesktop";
import articleService from "../../async/services/articleService";
import { TextArea } from "./textArea";
import { Helmet } from "react-helmet";
import getEnvVariables from "../../config/config";

export const Article = () => {

    const { strapiServer } = getEnvVariables();
    const { id } = useParams();
    const classes = useStyles();
    const [data, setData] = useState();
    const location = useLocation();
    const URI = `${strapiServer}${location.pathname}`;
    const loadData = async () => {
        const response = await articleService(id);
        setData(response);
    }
    useEffect(() => { loadData() }, [])


    return (
        data && <Grid container direction='column' className={classes.articleContainer}>
            <Helmet>
                <meta property="og:description" content={data?.data?.attributes?.completeText} />
                <meta property="og:image" content={data?.data?.attributes?.images} />
                <meta property="og:url" content={URI} />
                <meta property="og:type" content="article" />
            </Helmet>
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
                uri={URI}
                pdf={data?.data?.attributes?.pdf}
            />

            <Grid item container style={{}}>
                <Grid
                    item
                    xs
                    container
                    direction="column"
                    className={`${classes.textArea}`}
                    style={{ overflow: 'hidden' }}
                >
                    <Grid item style={{ width: '100%' }}>
                        <TextArea text={data?.data?.attributes?.completeText} />
                    </Grid>
                    <Grid item>
                        <ReferencesArea references={data?.data?.attributes?.bibliographies.data} />
                    </Grid>
                </Grid>
                <Grid item xs='auto'>
                    <MenuDesktop
                        references={data?.data?.attributes?.bibliographies.data}
                        menu={data?.data?.attributes?.menus}
                        images={data?.data?.attributes?.images}
                        tables={data?.data?.attributes?.tables}
                        uri={URI}
                        pdf={data?.data?.attributes?.pdf}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}