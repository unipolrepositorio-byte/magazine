import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const articleService = async(id) => {
    return await get(`${buildApiUri()}/articles/${id}/?populate=*`);
}
export default articleService;