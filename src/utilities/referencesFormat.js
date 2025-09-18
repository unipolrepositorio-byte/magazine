export const referencesFormat = ({ authorInitial, authorLastName, publicationTitle, editorInitials, editorLastName, volume, pages, publicationYear }) => {
    let referencesFinal = '';


    ///---Control authorFirstName
    if (authorInitial) {
        authorInitial = authorInitial.trim();
        if (authorInitial[authorInitial.length - 1] !== '.') {
            authorInitial += '.'
        }
        referencesFinal += authorInitial + ' ';
    }


    ///---Control authorLastName
    if (authorLastName) {
        authorLastName = authorLastName.trim();
        referencesFinal += authorLastName;
    }


    ///---Control title
    if (!publicationTitle) {
        return referencesFinal;
    }
    publicationTitle = publicationTitle?.trim();
    if (publicationTitle[publicationTitle.length - 1] !== '.') {
        publicationTitle += '.'
    }
    referencesFinal += ', ' + publicationTitle + ' ';


    ///---Control editorialInitials
    if (editorInitials) {
        editorInitials = editorInitials.trim();
        if (editorInitials[editorInitials.length - 1] !== '.') {
            editorInitials += '.'
        }
        referencesFinal += editorInitials + ' '

    }


    ///---Control editorLastName
    if (editorLastName) {
        editorLastName = editorLastName.trim();
        if (editorLastName[editorLastName.length - 1] !== '.') {
            editorLastName += '.'
        }
        referencesFinal += editorLastName + ' '

    }


    ///---Control volume
    if (volume) {
        volume = volume.trim();
        referencesFinal += volume;
    }


    ///---Control pages
    if (pages) {
        pages = pages.trim();
        referencesFinal += ', ' + pages
    }


    ///---Control publicationYear
    if (publicationYear) {
        publicationYear = String(publicationYear);
        publicationYear = publicationYear.trim();
        referencesFinal += ' (' + publicationYear + ').';

    }


    return (referencesFinal)
}