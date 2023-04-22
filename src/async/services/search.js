import { post } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const search = async(criteria) => {
    return await post(`${apiUri}/server/search?apiMode=true`, {
        searchcriterion: criteria
    });
}
export default search;