import { byAll } from "../mocked/events";

export const getAllEvents = async (token = "") => {
    try {
        // const result = byAll;
        return byAll;
    } catch (error) {
        console.error(error);
        return null;
    }
};
