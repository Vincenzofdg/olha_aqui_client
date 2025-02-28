import { byAll } from "../mocked/ads";

export const getAllAds = async (token = "") => {
   try {
           // const result = byAll;
           return byAll;
       } catch (error) {
           console.error(error);
           return null;
       }
};


export const getPhoneByAds = async (type, token = "") => {
    try {
        // const result = byAll.find(item => item.id === id);
        return byAll.filter(
            item => type.toLowerCase() === item.type.toLowerCase(),
        );
    } catch (error) {
        console.error(error);
        return [];
    }
};
