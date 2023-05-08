import getEnvVariables from "../../config/config"

const buildApiUri = () => {
    const { strapiServer, strapiServerPort, strapiServerService } = getEnvVariables();
    return `${strapiServer}:${strapiServerPort}/${strapiServerService}`;
}
export default buildApiUri;