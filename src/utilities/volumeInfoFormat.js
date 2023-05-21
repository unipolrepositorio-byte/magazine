export const volumeInfoFormat = (volume) => {
    const date = new Date(volume?.attributes?.date);

    var optionMonth = {month: 'long'};
    var optionDay = {day: 'numeric'};
    var optionYear = {year: 'numeric'};

    var month = date.toLocaleDateString('es-Es', optionMonth);
    month = month[0].toUpperCase()+month.slice(1);
    var day = date.toLocaleDateString('es-Es', optionDay);
    var year = date.toLocaleDateString('es-Es', optionYear);

    const finalDate = `${month} ${day}. ${year}`;


    const title = volume?.attributes?.title;


    return `${finalDate} | ${title}`
}