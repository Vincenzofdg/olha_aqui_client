import endpoint from '../api';

export const getAllNews = async (token = "") => {
    try {
        const result = await endpoint.get('/publication/article');
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getNewsById = async (id, token = "") => {
    try {
        const result = await endpoint.get(`/publication/article/${id}`);
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getHighlightedNews = async (token = "") => {
    try {
        const result = await endpoint.get(`/publication/article`);
        return result.data.filter(item => !!item.highlighted);
    } catch (error) {
        console.error(error);
        return [];
    }
};
