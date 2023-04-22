import { get } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const getDocument = async(id) => {
    return await get(`${apiUri}/server/detail?id=${id}&apiMode=true`, {});
}
export default getDocument;