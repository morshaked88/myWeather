import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/WeatherProvider';

const TodayMain = ({ obj }) => {

    const { isChecked, cityCode } = useData();

    const data = { ...obj }


    console.log(isChecked)
    console.log(cityCode)
    const weatherIcon = `/img/weather/${data.weatherIcon}.png`;
    const metric = `${data.metric.value}${data.metric.unit}°`;
    const imperial = `${data.imperial.value}${data.imperial.unit}°`;

    return (
        <>
            {cityCode === undefined ?
                <Text>
                    Something went wrong
        </Text>
                :
                <Box>
                    <Text>Your location: {data.location}</Text>
                    <Box>
                        <Icon src={weatherIcon} />
                        <Text>{data.weatherText}</Text>
                        <Text>{
                            !isChecked ?
                                metric
                                :
                                imperial
                        }</Text>
                        <Text>Feasibility of rain: {data.rain ? 'Yes' : 'No'}</Text>
                    </Box>
                </Box>
            }
        </>

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
`;

const Icon = styled.img`
margin: 2rem 0;
height: 10rem;
`;