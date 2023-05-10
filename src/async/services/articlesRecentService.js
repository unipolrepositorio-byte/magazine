import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesRecentService = async() => {
    return await get(`${buildApiUri()}/articles?pagination[limit]=2&populate=autors`);
}
export default articlesRecentService;