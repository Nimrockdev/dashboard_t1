import { wheaterAPI } from "../api/wheaterAPI"

export const sleep = (seconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    });
};

export const getCurrentWeatherOLD = async () => {

    // await sleep(2);

    const { data } = await wheaterAPI.get();

    return data;
}

export const getCurrentWeatherKO = async (lat, lon) => {

    try {
        const response = await wheaterAPI.get(`&lat=${lat}&lon=${lon}`);
        console.log('jsg data');

        const data = await response.data;
        console.log(data);


        return data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error; // Propagar el error para que React Query lo maneje
    }
};

export const getCurrentWeather = (lat, lon) => {
    try {
        return async () => {
            const response = await wheaterAPI.get(`&lat=${lat}&lon=${lon}`);
            const data = await response.data;

            return data;
        };
    } catch (error) {
        console.log(error);
    }
};