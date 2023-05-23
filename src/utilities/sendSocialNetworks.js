export const sendSocialNetworks = (uri, title, socialNetwork) => {
    
const FACEBOOK_URI = 'https://www.facebook.com/sharer/sharer.php?u=';
const WATHSAPP_URI = 'https://api.whatsapp.com/send?text=';
const TELEGRAM_URI = 'https://t.me/share/url?url=$';
    switch (socialNetwork) {
        case 'facebook':
                window.open(`${FACEBOOK_URI}${encodeURIComponent(uri)}&quote=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'telegram':
                window.open(`${TELEGRAM_URI}${encodeURIComponent(uri)}&text=${encodeURIComponent(title)}`, '_blank');
            break;
        case 'whatsapp':
                window.open(`${WATHSAPP_URI}${encodeURIComponent(`${title} ${uri}`)}`, '_blank');
            break;
    }
}