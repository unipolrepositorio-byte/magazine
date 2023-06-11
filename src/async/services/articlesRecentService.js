import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesRecentService = async() => {
    return await get(`${buildApiUri()}/articles?_limit=5&sort=id:desc&populate=*`);
}
export default articlesRecentService;