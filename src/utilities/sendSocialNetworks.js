import getEnvVariables from "../config/config";

export const sendSocialNetworks = (uri, title, socialNetwork) => {
    const { facebookUri, whatsappUri, telegramUri } = getEnvVariables();
    switch (socialNetwork) {
        case 'facebook':
                window.open(`${facebookUri}?u=${encodeURIComponent(uri)}`, '_blank');
            break;
        case 'telegram':
                window.open(`${telegramUri}?url=$${encodeURIComponent(uri)}&text=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'whatsapp':
                window.open(`${whatsappUri}?text=${encodeURIComponent(`${title} ${uri}`)}`, '_blank');
            break;
    }
}