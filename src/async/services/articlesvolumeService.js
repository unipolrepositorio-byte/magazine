import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesVolumeService = async(idVolume) => {
    return await get(`${buildApiUri()}/volumes/${idVolume}?populate[articles][populate]=*`);
}
export default articlesVolumeService;