import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useData } from '../../../Store/WeatherProvider';
import * as getWeather from '../../../services/WeatherData';

const InputTag = ({ holder }) => {

    const { todaySearch, setTodaySearch, setTodayWeather, todayWeather, setFetchingToday, setError } = useData();

    //get the user search input and change state
    const getValue = (e) => {
        e.preventDefault();
        setTodaySearch(e.target.value)
        console.log(todaySearch)

    }


    const convertTemp = (temp) => {
        const result = temp * (9 / 5) + 32;
        return result;
    }

    const fetchData = async () => {
        try {
            const res = await getWeather.getCurrentWeater(todaySearch);

            const newDescription = res.weather[0].description.charAt(0).toUpperCase() + res.weather[0].description.slice(1);

            setTodayWeather({
                location: res.name + ', ' + res.sys.country,
                weatherText: newDescription,
                icon: res.weather[0].icon,
                Temp: {
                    metric: `${res.main.temp.toFixed(2)}C°`,
                    imperial: `${convertTemp(res.main.temp).toFixed(2)}F°`
                },
                humidity: res.main.humidity,
            })
            setFetchingToday(false);
            setError(false);
        } catch (err) {
            setError(true);
        }

    }





    //send API request to get weather data on btn click
    const todayNewSearch = async (e) => {
        e.preventDefault();
        fetchData();

    }

    //send API request to get weather data on keypress
    const EnterTodaySearch = async (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    }



    return (
        <Form>
            <Input type='text' placeholder={holder} onChange={(e) => getValue(e)} onKeyPress={(e) => EnterTodaySearch(e)} />
            <Button type='submit' ><FaSearch style={{ fontSize: '20px' }} onClick={(e) => todayNewSearch(e)} /></Button>
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