import endpoint from '../api';

export const getAllContacts = async (token = "") => {
    try {
        const result = await endpoint.get('/contacts');
        return result.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
