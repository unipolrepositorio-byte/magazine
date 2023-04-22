import SearchComponent from "../../components/SearchComponent";
import { post } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const searchDocuments = async(payload) => {
    return await post(`${apiUri}/server/listdatabase?apiMode=true`, payload);
}
export default searchDocuments;