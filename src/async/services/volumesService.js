import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const volumesService = async(idYear) => {
    if (idYear) {
        return await get(`${buildApiUri()}/year-volumes/${idYear}?populate[volumes][populate]=portrait`);
    } else {
        return await get(`${buildApiUri()}/volumes?populate=portrait&sort=title`);
    }
}
export default volumesService;