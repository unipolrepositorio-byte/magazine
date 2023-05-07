import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { referencesFormat } from "../../../utilities/referencesFormat";
import { useStyles } from "./referencesArea.styles";

export const ReferencesArea = ({references}) => {

    const classes = useStyles();

    const Reference = ({authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear, index}) => {
        const final = referencesFormat({authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear});
        return(
        <Grid container direction="column" spacing={1} className={classes.container}>
            <Grid item style={{position:'relative'}}>
                <div className={classes.indexReference}>
                    <label>{index+1}</label>
                </div>
                <label>{final}</label><br/>
            </Grid>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                        <Link item><label>Go to reference </label></Link>
                    </Grid>
                    <Grid item>
                        <Link item><label>Crossref </label></Link>
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

    return(
        <>
            <p className={classes.title}>REFERENCIAS</p>
            {references.map((item, index) => {
                return (
                    <Reference 
                        authorInitial={item.attributes.authorInitials}
                        authorLastName={item.attributes.authorLastName}
                        publicationTitle={item.attributes.publicationTitle}
                        editorInitials={item.attributes.editorInitials}
                        editorLastName={item.attributes.editorLastName}
                        volume={item.attributes.volume}
                        pages={item.attributes.pages}
                        publicationYear={item.attributes.publicationYear}
                        index={index}
                    />)
            })}
        </>
    )
}