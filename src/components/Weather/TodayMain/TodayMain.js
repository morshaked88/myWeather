import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/WeatherProvider';
import Error from '../../Error/Error';

const TodayMain = ({ obj }) => {

    const { isChecked, is_error } = useData();

    const data = { ...obj };
    const iconImage = `/img/weather/${data.icon}.png`;


    const error = is_error;


    return (
        <Box>
            {error ? <Error text='city not found' />
                :
                <>
                    <Text>Your location: {data.location}</Text>
                    <Box>
                        <Icon src={iconImage} alt='weather image' />
                        <Text>{data.weatherText}</Text>
                        <Text>Tempeture: {
                            isChecked ?
                                data.Temp.metric
                                :
                                data.Temp.imperial
                        }</Text>
                        <Text>Humidity: {data.humidity}%</Text>
                    </Box>
                </>
            }
        </Box>

    )
};

export default TodayMain;

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1.8rem;
`;



const Text = styled.h2`
margin-top: 1.8rem;
font-size: 5.5vw;

@media only screen and (min-width: 780px){
    font-size: 3vw;
}
`;

const Icon = styled.img`
margin: 2rem 0;
height: 12rem;

@media only screen and (min-width: 780px){
    height: 15rem;
}
`;