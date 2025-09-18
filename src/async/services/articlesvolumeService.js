import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesVolumeService = async (idVolume) => {
    return await get(`${buildApiUri()}/volumes/${idVolume}?populate[articles][populate]=*&[populate][articles][sort]=order:asc`);
}
export default articlesVolumeService;