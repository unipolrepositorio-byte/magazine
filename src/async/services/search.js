import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const search = async(criteria) => {
    return await get(`${buildApiUri()}/articles/search?search=${criteria}`);
}
export default search;