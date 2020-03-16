import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useData } from '../../../Store/WeatherProvider';
import * as getWeather from '../../../services/WeatherData';
import dateFormat from 'dateformat';

const InputTag = ({ holder }) => {

    const { setWeeklyName, setWeeklyWeather, fetchingWeekly, setFetchingWeekly, weeklySearch, setWeeklySearch, setError } = useData();

    //get the user search input and change state
    const getValue = (e) => {
        e.preventDefault();
        setWeeklySearch(e.target.value)
    }


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

                setWeeklyWeather(dataObj);
                setError(false);


            }
        } catch (err) {
            setError(true);
        }

    }





    //send API request to get weather data on btn click
    const WeeklyNewSearch = async (e) => {
        e.preventDefault();
        fetchData();

    }

    //send API request to get weather data on keypress
    const EnterWeeklySearch = async (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    }



    return (
        <Form>
            <Input type='text' placeholder={holder} onChange={(e) => getValue(e)} onKeyPress={(e) => EnterWeeklySearch(e)} />
            <Button type='submit' ><FaSearch style={{ fontSize: '20px' }} onClick={(e) => WeeklyNewSearch(e)} /></Button>
        </Form>
    )
};

export default InputTag;

const Form = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
margin: 1rem 0;
height: 4rem;
border-bottom-left-radius: 0.6rem;
border-top-left-radius: 0.6rem;
border: 1px solid black;
width: 70%;
padding-left: 0.5rem;
outline: none;

@media only screen and (min-width: 780px){
    width: 40%;
}
`;

const Button = styled.button`
height: 4rem;
padding: 0.5rem 1rem;
border-bottom-right-radius: 0.6rem;
border-top-right-radius: 0.6rem;
border-right: 1px solid black;
border-top: 1px solid black;
border-bottom: 1px solid black;
border-left: none;
background-color: #e67e22;
`;