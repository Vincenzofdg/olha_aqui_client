const currentUrl = (type) => {
    const urls = {
        production: 'https://api.vkcoders.com/olha-aqui-condominio/',
        ip: 'http://192.168.0.193:3002/',
    };
    return urls[type];
};

const url = currentUrl('ip');

export { url };
