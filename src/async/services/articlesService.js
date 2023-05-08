import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesService = async() => {
    return await get(`${buildApiUri()}/articles`);
}
export default articlesService;