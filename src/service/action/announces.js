import endpoint from '../api';

export const getAllAnnounces = async (token = "") => {
    try {
        const {data} = await endpoint.get('/publication/announce');

        const getAllTagsByAnnounces = data.reduce((acc, cur) => {
            const currentTags = cur.tag.split(";");

            for (const tag of currentTags) {
                const findIfTagIsOnList = acc.includes(tag)

                if (!findIfTagIsOnList) {
                    acc.push(tag)
                }
            }

            return acc;
        }, [])


        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return { data: sortedData, tags: getAllTagsByAnnounces};
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getNewsById = async (id, token = "") => {
    try {
        const result = await endpoint.get(`/publication/announce/${id}`);
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getHighlightedNews = async (token = "") => {
    try {
        const result = await endpoint.get(`/publication/announce`);
        return result.data.filter(item => !!item.highlighted);
    } catch (error) {
        console.error(error);
        return [];
    }
};
