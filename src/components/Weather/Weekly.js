import React, { useEffect } from 'react';
import styled from 'styled-components';
import InputTag from './Input/InputWeekly';
import Title from '../Headers/Title';
import SwitchKey from '../Layout/SwitchKey';
import WeeklyMain from './WeeklyMain/WeeklyMain';
import * as getWeather from '../../services/WeatherData';
import Error from '../Error/Error';
import dateFormat from 'dateformat';

import { useData } from '../../Store/WeatherProvider';



const Weekly = () => {

    const { weeklyWeather, weeklySearch, setWeeklyName, setFetchingWeekly, fetchingWeekly, setWeeklyWeather, setError, onClickWeekly, setOnClickWeekly } = useData();

    useEffect(() => {

        //convert celcius to farenhiet
        const convertTemp = (temp) => {
            const result = temp * (9 / 5) + 32;
            return result;
        }

        const fetchData = async () => {
            try {
                const res = await getWeather.getWeeklyWeather(weeklySearch);
                const data = await res.list;
                const location = `${res.city.name}, ${res.city.country}`
                setWeeklyName(location);
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

                    setOnClickWeekly(dataObj);
                    setError(false);


                }
            } catch (err) {
                setError(true);
            }

        }

        fetchData();

    }, []);


    return (
        <Box>
            <Title title='Weekly forecast' />
            <InputTag holder='Enter location for 5 days forecast' />
            <SwitchKey />
            {weeklyWeather === null ? <Error /> : <WeeklyMain data={weeklyWeather} />}
        </Box>
    )
};

export default Weekly;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;
