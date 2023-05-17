import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { referencesFormat } from "../../../utilities/referencesFormat";
import { useStyles } from "./referencesArea.styles";
import { useState } from "react";

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
    electronicAddress
}) => {

const classes = useStyles();
const [currentIndex, setCurrentIndex] = useState(1);

const goToNextReference = (idReference) => {
    const element = document.getElementById(`r${idReference}-${(currentIndex+1)}`);
    if(element!==null){
        handleClickScroll(`r${idReference}-${currentIndex}`);
        setCurrentIndex(prev => prev+1);
    }else{
        handleClickScroll(`r${idReference}-${currentIndex}`);
        setCurrentIndex(1);
    }
}

const final = referencesFormat({authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear});
return(
<Grid container direction="column" spacing={1} className={classes.container}>
    <Grid item style={{position:'relative', zIndex:'-1'}}>
        <div className={classes.indexReference}>
            <label id={`r${index+1}`}>{index+1}</label>
        </div>
        <label>{final}</label><br/>
    </Grid>
    <Grid item>
        <Grid container spacing={1}>
            <Grid item>
                <Link item onClick={()=>{goToNextReference(index+1)}}><label>Go to reference </label></Link>
            </Grid>
            <Grid item>
                <Link item to={electronicAddress}><label>Crossref </label></Link>
            </Grid>
        </Grid>
    </Grid>
</Grid>
)
}

export const ReferencesArea = ({references}) => {

    const classes = useStyles();

    

    return(
        <>
            <p className={classes.title} id='referencesArea'>REFERENCIAS</p>
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
        </>
    )
}