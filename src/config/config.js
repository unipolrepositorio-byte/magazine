
const parseEnvNumber = (envVar) => {
    const envVarValue = parseInt(process.env[envVar]);
    if (isNaN(envVarValue)) {
        throw new Error(`Environment variable ${envVar} is not a number`);
    }
    return envVarValue;
}

const parseEnvString = (envVar) => {
    const envVarValue = process.env[envVar];
    if (!envVarValue) {
        throw new Error(`Environment variable ${envVar} is not set`);
    }
    return envVarValue;
}

const parseEnvBoolean = (envVar) => {
    const envVarValue = process.env[envVar];
    if (!envVarValue) {
        throw new Error(`Environment variable ${envVar} is not set`);
    }
    return envVarValue === 'true';
}

const  getEnvVariables = () => {
    const strapiServerPort = parseEnvNumber('REACT_APP_STRAPI_SERVER_PORT');
    const strapiServer = parseEnvString('REACT_APP_STRAPI_SERVER');
    const nodeEnv = parseEnvString('NODE_ENV');
    const strapiServerService = parseEnvString('REACT_APP_STRAPI_SERVER_SERVICE');
    return {strapiServerPort, strapiServer, nodeEnv, strapiServerService};
}
export default getEnvVariables;