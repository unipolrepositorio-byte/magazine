import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const volumesService = async(idYear) => {
    if (idYear) {
        return await get(`${buildApiUri()}/year-volumes/${idYear}?populate[volumes][populate]=*`);
    } else {
        return await get(`${buildApiUri()}/volumes?populate=*&sort=title`);
    }
}

export const getLastVolume = async() => {
    return await get(`${buildApiUri()}/volumes?populate=portrait&sort=id:desc&_limit=1`);
}
export default volumesService;