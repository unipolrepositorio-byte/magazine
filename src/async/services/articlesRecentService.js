import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesRecentService = async () => {
    return await get(`${buildApiUri()}/volumes?sort=createdAt:desc&pagination[limit]=1&populate[articles][populate]=*&[populate][articles][sort]=order:asc`);
}
export default articlesRecentService;