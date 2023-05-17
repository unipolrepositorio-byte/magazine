import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const yearsVolumeService = async() => {
    return await get(`${buildApiUri()}/year-volumes`);
}
export default yearsVolumeService;