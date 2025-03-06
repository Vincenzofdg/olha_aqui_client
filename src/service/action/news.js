import endpoint from '../api';

export const getAllNews = async (token = '') => {
    try {
        const {data} = await endpoint.get('/publication/article');

        const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        return sortedData;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getNewsById = async (id, token = '') => {
    try {
        const result = await endpoint.get(`/publication/article/${id}`);
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getHighlightedNews = async (token = '') => {
    try {
        const result = await endpoint.get(`/publication/article`);
        return result.data.filter(item => !!item.highlighted);
    } catch (error) {
        console.error(error);
        return [];
    }
};
