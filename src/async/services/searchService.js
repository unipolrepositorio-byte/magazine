import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const searchService = async(criterial) => {
    console.log('test call here');
    return await get(`${buildApiUri()}/articles/search?search=${criterial}`);
}
export default searchService;