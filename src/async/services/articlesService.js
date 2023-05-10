import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articlesService = async() => {
    return await get(`${buildApiUri()}/articles/?populate=*`);
}
export default articlesService;