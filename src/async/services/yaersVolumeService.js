import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const yearsVolumeService = async() => {
    return await get(`${buildApiUri()}/volumes?fields[0]=date`);
}
export default yearsVolumeService;