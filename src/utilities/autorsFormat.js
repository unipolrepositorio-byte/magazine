export const autorsFormat = (autors) => {
    let final = '';
    autors.map(item => {
        final += `${item}`;
    });
    final = final.slice(0, final.length - 3);
    return final
}