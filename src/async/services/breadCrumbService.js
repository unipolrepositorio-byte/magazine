import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const breadCrumbService = async() => {
    return await get(`${buildApiUri()}/volumes?sort=date:desc&populate=*&pagination[limit]=1`);
}
export default breadCrumbService;