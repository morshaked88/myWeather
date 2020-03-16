import React, { useContext, createContext, useEffect, useState } from 'react';
import * as getWeather from '../services/WeatherData';
import dateFormat from 'dateformat';

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
    //get user today search
    const [todaySearch, setTodaySearch] = useState('');
    //user today weather data
    const [todayWeather, setTodayWeather] = useState(null);
    // is fetching today weather search? 
    const [fetchingToday, setFetchingToday] = useState(true);
    //error?
    const [is_error, setError] = useState(false);
    //weekly search input
    const [weeklyWeather, setWeeklyWeather] = useState(null);
    //weekly fetch API
    const [fetchingWeekly, setFetchingWeekly] = useState(true);
    //
    const [undefindLocation, setUndefinedLocation] = useState(null);
    //set user date to watch 
    const [currentDay, setCurrentDay] = useState(0);
    //weekly search input
    const [weeklySearch, setWeeklySearch] = useState('');
    ///weekly location city+country;
    const [weeklyName, setWeeklyName] = useState(null);
    // on click get current location weekly weather
    const [onClickWeekly, setOnClickWeekly] = useState(null);

    const key = 'afc7a83b13184c87a331ed58df016644';

    useEffect(() => {
        ///get user current location;
        const getPostion = async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${key}`);
            const location = await res.json();
            const city = location.results[0].components.residential;
            const country = location.results[0].components.country_code.toUpperCase();
            const data = `${city}, ${country}`;
            setLocation(data);
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
            try {

                const data = await getWeather.getCurrentWeater(userLocation);
                setFetchTodayDef(false);


                if (!fetchTodayDef) {

                    //upperCase the first letter of description
                    const newDescription = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

                    //check if city undefind and change it
                    const newLocation = userLocation.split(',')[0] === 'undefined' ? `Unknown city, ${userLocation.split(',')[1]}` : userLocation;
                    setUndefinedLocation(newLocation);

                    const dataObj = {
                        location: newLocation,
                        weatherText: newDescription,
                        icon: data.weather[0].icon,
                        Temp: {
                            metric: `${data.main.temp.toFixed(2)}C°`,
                            imperial: `${convertTemp(data.main.temp).toFixed(2)}F°`
                        },
                        humidity: data.main.humidity,
                    }
                    setDefultToday(dataObj);
                    setError(false);

                }

            } catch (err) {
                setError(true)
            }

        }

        const weeklyWeather = async () => {
            try {
                const res = await getWeather.getWeeklyWeather(userLocation);
                const data = await res.list;
                setFetchingWeekly(false);

                if (!fetchingWeekly) {

                    const filtered = data.filter(obj => {
                        if (obj.dt_txt.split(' ')[1] === '15:00:00') {
                            return obj
                        }
                    })


                    const dataObj = [
                        {
                            dt: dateFormat(filtered[0].dt_txt.split(' ')[0], 'fullDate'),
                            weatherText: filtered[0].weather[0].description.charAt(0).toUpperCase() + filtered[0].weather[0].description.slice(1),
                            icon: filtered[0].weather[0].icon,
                            Temp: {
                                metric: `${filtered[0].main.temp.toFixed(2)}C°`,
                                imperial: `${convertTemp(filtered[0].main.temp).toFixed(2)}F°`
                            },
                            humidity: filtered[0].main.humidity,
                        },
                        {
                            dt: dateFormat(filtered[1].dt_txt.split(' ')[0], 'fullDate'),
                            weatherText: filtered[1].weather[0].description.charAt(0).toUpperCase() + filtered[1].weather[0].description.slice(1),
                            icon: filtered[1].weather[0].icon,
                            Temp: {
                                metric: `${filtered[1].main.temp.toFixed(2)}C°`,
                                imperial: `${convertTemp(filtered[1].main.temp).toFixed(2)}F°`
                            },
                            humidity: filtered[1].main.humidity,
                        },
                        {
                            dt: dateFormat(filtered[2].dt_txt.split(' ')[0], 'fullDate'),
                            weatherText: filtered[2].weather[0].description.charAt(0).toUpperCase() + filtered[2].weather[0].description.slice(1),
                            icon: filtered[2].weather[0].icon,
                            Temp: {
                                metric: `${filtered[2].main.temp.toFixed(2)}C°`,
                                imperial: `${convertTemp(filtered[2].main.temp).toFixed(2)}F°`
                            },
                            humidity: filtered[2].main.humidity,
                        },
                        {
                            dt: dateFormat(filtered[3].dt_txt.split(' ')[0], 'fullDate'),
                            weatherText: filtered[3].weather[0].description.charAt(0).toUpperCase() + filtered[3].weather[0].description.slice(1),
                            icon: filtered[3].weather[0].icon,
                            Temp: {
                                metric: `${filtered[3].main.temp.toFixed(2)}C°`,
                                imperial: `${convertTemp(filtered[3].main.temp).toFixed(2)}F°`
                            },
                            humidity: filtered[3].main.humidity,
                        },
                        {
                            dt: dateFormat(filtered[4].dt_txt.split(' ')[0], 'fullDate'),
                            weatherText: filtered[4].weather[0].description.charAt(0).toUpperCase() + filtered[4].weather[0].description.slice(1),
                            icon: filtered[4].weather[0].icon,
                            Temp: {
                                metric: `${filtered[4].main.temp.toFixed(2)}C°`,
                                imperial: `${convertTemp(filtered[4].main.temp).toFixed(2)}F°`
                            },
                            humidity: filtered[4].main.humidity,
                        }
                    ]


                    setWeeklyWeather(dataObj)

                }

            } catch (err) {
                console.log(err)
                setError(true)
            }

        }

        currentWeather();
        weeklyWeather();



    }, [fetchingLocation])


    const state = {
        isOpen,
        userLocation,
        fetchingLocation,
        defultToday,
        fetchTodayDef,
        isChecked,
        todaySearch,
        todayWeather,
        fetchingToday,
        is_error,
        weeklyWeather,
        fetchingWeekly,
        undefindLocation,
        currentDay,
        weeklySearch,
        weeklyName,
        onClickWeekly
    };

    const cb = {
        setOpen,
        setLocation,
        setFetchLocation,
        setChecked,
        setTodaySearch,
        setTodayWeather,
        setFetchingToday,
        setError,
        setWeeklyWeather,
        setFetchingWeekly,
        setCurrentDay,
        setWeeklySearch,
        setWeeklyName,
        setOnClickWeekly
    };

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider >
    )
}

export { useData, WeatherProvider };
