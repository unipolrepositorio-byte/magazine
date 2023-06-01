export const sendSocialNetworks = (uri, title, socialNetwork) => {
const FACEBOOK_URI = process.env.REACT_APP_FACEBOOK_URI // 'https://www.facebook.com/sharer/sharer.php?u=';
const WATHSAPP_URI = process.env.REACT_APP_WHATSAPP_URI //'https://api.whatsapp.com/send?text=';
const TELEGRAM_URI = process.env.REACT_APP_TELEGRAM_URI //'https://t.me/share/url?url=$';
    switch (socialNetwork) {
        case 'facebook':
                window.open(`${FACEBOOK_URI}?u=${encodeURIComponent(uri)}`, '_blank');
            break;
        case 'telegram':
                window.open(`${TELEGRAM_URI}?url=$${encodeURIComponent(uri)}&text=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'whatsapp':
                window.open(`${WATHSAPP_URI}?text=${encodeURIComponent(`${title} ${uri}`)}`, '_blank');
            break;
    }
}