import endpoint from '../api';

export const submitMessage = async (payload, token = '') => {
    const {description, ...data} = payload;
    const formatedObj = {
        ...data,
        message: description,
    };

    try {
        await endpoint.post('/messages', formatedObj, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
