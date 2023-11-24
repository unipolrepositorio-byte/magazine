import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const getDynamicBanner = async() => {
    return await get(`${buildApiUri()}/dynamic-banners?populate=*`);
}

export default getDynamicBanner;