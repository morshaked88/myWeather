
const key = 'f92bb4da50acdefa40bf9503f34405c4';

export const getCurrentWeater = async (location) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`);

        const data = await res.json();

        return data;


    } catch (err) {
        throw new Error(err)
    }
}

export const getWeeklyWeather = async (location) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}&units=metric`);

        const data = await res.json();

        return data;


    } catch (err) {
        throw new Error(err)
    }
}