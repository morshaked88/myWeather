import React, { useContext, createContext, useEffect, useState } from 'react';
import * as getWeather from '../services/WeatherData';

const WeatherContext = createContext();
const { Provider } = WeatherContext;


const useData = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('context must be within the provider')
    }

    return context;
}

const WeatherProvider = ({ children }) => {
    //navbar state
    const [isOpen, setOpen] = useState(false);
    //current user location state
    const [userLocation, setLocation] = useState(null);
    //is fetching location state
    const [fetchingLocation, setFetchLocation] = useState(true);
    // key for city api search
    const [cityKey, setCityKey] = useState(null);
    // obj of current weather
    const [defultToday, setDefultToday] = useState(null);
    // is fetching current weather
    const [fetchTodayDef, setFetchTodayDef] = useState(true);
    //Switch key state
    const [isChecked, setChecked] = useState(true);

    const key = 'afc7a83b13184c87a331ed58df016644';

    useEffect(() => {
        ///get user current location;
        const getPostion = async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${key}`);
            const location = await res.json();
            const data = await location.results[0].components.town + ', ' + location.results[0].components.country;

            setLocation('Tel-aviv, Israel');
            setFetchLocation(false);
        }

        const locationNotReceived = (positionError) => {
            console.log(positionError)
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPostion, locationNotReceived)
        }

        //convert celcius to farenhiet
        const convertTemp = (temp) => {
            const result = temp * (9 / 5) + 32;
            return result;
        }

        const currentWeather = async () => {

            const data = await getWeather.getCurrentWeater(userLocation);
            setFetchTodayDef(false);
            console.log(data);



            if (!fetchTodayDef) {

                //upperCase the first letter of description
                const newDescription = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

                const dataObj = {
                    location: userLocation,
                    weatherText: newDescription,
                    icon: data.weather[0].icon,
                    Temp: {
                        metric: `${data.main.temp}C°`,
                        imperial: `${convertTemp(data.main.temp)}F°`
                    },
                    humidity: data.main.humidity,
                }
                setDefultToday(dataObj)

            }
        }

        currentWeather();



    }, [fetchingLocation])

    console.log(userLocation)


    const state = {
        isOpen,
        userLocation,
        fetchingLocation,
        defultToday,
        fetchTodayDef,
        isChecked
    };

    const cb = {
        setOpen,
        setLocation,
        setFetchLocation,
        setChecked
    };

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider >
    )
}

export { useData, WeatherProvider };
