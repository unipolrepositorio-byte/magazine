import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const volumesService = async() => {
    return await get(`${buildApiUri()}/volumes`);
}
export default volumesService;