import axios from "axios";

const visionAxios = axios.create({
    baseURL: 'https://run.mocky.io/v3/',
    timeout: 10000,
});

// Calling to another external service
// const weatherApiAxios = axios.create({
//    baseURL: 'https://weather.com/v3/',
//    timeout: 10000,
// });

export const getCameraData = async () => {
    try {
       // const response = await visionAxios.get('876fe0e5-9e85-44b2-b4f1-220e38a01f47');
        return response.data;
    }
    catch (error) {
        console.error('Error while fetching camera data!', error);
    }
};
