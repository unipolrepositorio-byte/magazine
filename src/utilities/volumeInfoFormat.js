export const volumeInfoFormat = (volume) => {
    if (volume.attributes.date) {
        const date = new Date(volume?.attributes?.date);

        var optionMonth = { month: 'long' };
        var optionDay = { day: 'numeric' };
        var optionYear = { year: 'numeric' };

        var month = date.toLocaleDateString('es-Es', optionMonth);
        month = month[0].toUpperCase() + month.slice(1);
        var day = date.toLocaleDateString('es-Es', optionDay);
        var year = date.toLocaleDateString('es-Es', optionYear);

        const finalDate = `${month} | ${year}`;


        const title = volume?.attributes?.title;


        return `${finalDate} | ${title}`
    }
}