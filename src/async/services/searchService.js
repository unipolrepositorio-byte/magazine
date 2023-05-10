import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const searchService = async(criterial) => {
    return await get(`${buildApiUri()}/articles/search?search=${criterial}`);
}
export default searchService;