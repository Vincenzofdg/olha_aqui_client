import endpoint from '../api';

export const getAllLaw = async (token = "") => {
    try {
        const result = await endpoint.get('/laws');

        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getLawById = async (id, token = "") => {
    try {
        const result = await endpoint.get(`/laws/${id}`);
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
