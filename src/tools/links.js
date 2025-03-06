import {Linking} from 'react-native';

export const openBrowser = (path) => Linking.openURL(path);

export const phone = (number) => {
    const url = 'tel:' + number;
    try {
        Linking.openURL(url);
    } catch (err) {
        console.error(err);
    }
};

export const whatsapp = (number) => {
    const url = 'https://wa.me/'+ number;
    try {
        Linking.openURL(url);
    } catch (err) {
        console.error(err);
    }
};
