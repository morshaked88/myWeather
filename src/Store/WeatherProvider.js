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
    const [userLocation, setLocation] = useState('');
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


    // const key = '58GQLmP4lcGAs9iO8lhCuc1wVL3KC1x0';
    const key = 'zaH11iZCpF95FQ1w8BMuwaQsdCOHsL6v';

    useEffect(() => {
        ///get user current location;
        const geoFindMe = (position) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const GEOCODING = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyDMVZ2LfuueuUg-41nu76NzEii7AsO0FX4`);
                    const res = await GEOCODING.json();
                    const data = await res.plus_code.compound_code;

                    const newData = data.split(' ').slice(1).join(' ');

                    setLocation('tel aviv, israel');
                    setFetchLocation(false);
                    console.log(userLocation)


                })

            } else {
                console.log('browser not support geolocation');
            }
        }




        const getCityKey = async () => {
            const cityCode = await getWeather.getCityKey(userLocation);
            setCityKey(cityCode);
            try {
                //get city weather after getting city code
                if (cityKey !== null) {
                    const res = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${key}`, { mode: 'no-cors' });
                    const data = await res.json();
                    console.log(data)

                    setDefultToday({
                        location: userLocation,
                        weatherText: data[0].WeatherText,
                        rain: data[0].HasPrecipitation,
                        weatherIcon: data[0].WeatherIcon,
                        metric: {
                            value: data[0].Temperature.Metric.Value,
                            unit: data[0].Temperature.Metric.Unit
                        },
                        imperial: {
                            value: data[0].Temperature.Imperial.Value,
                            unit: data[0].Temperature.Imperial.Unit
                        }
                    })
                    setFetchTodayDef(false);
                }
            } catch (err) {
                throw new Error(err)

            }

        }

        geoFindMe();
        getCityKey();

    }, [fetchingLocation])


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
