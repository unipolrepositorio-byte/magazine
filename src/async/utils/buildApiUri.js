import getEnvVariables from "../../config/config";

const buildApiUri = () => {
  const { strapiServer, strapiServerService } = getEnvVariables();
  return `${strapiServer}/${strapiServerService}`;
};
export default buildApiUri;
