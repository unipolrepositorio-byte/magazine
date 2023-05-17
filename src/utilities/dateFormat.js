export const dateFormat = (dateString) => {
    var date = new Date(`${dateString}T00:00:00`);
    var optionMonth = { month: 'long' };
    var optionDay = { day: 'numeric' };
    var optionYear = { year: 'numeric' };

    var month = date.toLocaleDateString('es-Es', optionMonth);
    month = month[0].toUpperCase() + month.slice(1);
    var day = date.toLocaleDateString('es-Es', optionDay);
    var year = date.toLocaleDateString('es-Es', optionYear).slice(2);

    const finalDate = `${month} ${day} | ${year}`;
    return finalDate
}
