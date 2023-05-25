import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const searchService = async(criterial) => {
    return await get(`${buildApiUri()}/articles/?populate=*&filters[title][$containsi]=${criterial}`);
}
export default searchService;