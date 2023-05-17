import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const breadCrumbService = async() => {
    return await get(`${buildApiUri()}/articles?sort=date:desc&pagination[limit]=1&populate=volume&fields=date`);
}
export default breadCrumbService;