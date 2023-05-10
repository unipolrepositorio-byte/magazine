import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const volumeDateService = async() => {
    return await get(`${buildApiUri()}/articles?populate=volume&fields=date&sort=date:desc&pagination[limit]=1`);
}
export default volumeDateService;