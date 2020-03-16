import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useData } from '../../../Store/WeatherProvider';
import Error from '../../Error/Error';

const TodayMain = ({ obj }) => {

    const { isChecked, is_error, weeklySearch, setWeeklySearch } = useData();

    const data = { ...obj };
    const iconImage = `/img/weather/${data.icon}.png`;


    const error = is_error;


    return (
        <Box>
            {error ? <Error text='city not found' />
                :
                <Box2>
                    <Text>Your location: {data.location}</Text>
                    <DataBox>
                        <Icon src={iconImage} alt='weather image' />
                        <TextBox>
                            <Text>{data.weatherText}</Text>
                            <Text>Tempeture: {
                                isChecked ?
                                    data.Temp.metric
                                    :
                                    data.Temp.imperial
                            }</Text>
                            <Text>Humidity: {data.humidity}%</Text>
                            <Btn to='/weekly' onClick={() => setWeeklySearch(data.location)}>5 days forecast</Btn>
                        </TextBox>
                    </DataBox>
                </Box2>
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
height: 100%;
overflow: auto;
`;

const DataBox = styled.div`
width: 100%;
height: 95%;
display: flex;
flex-direction: column;
align-items: center;
`;

const TextBox = styled.div`
height: 35%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

const Box2 = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;


const Btn = styled(Link)`
text-decoration: none;
border: 0.1rem solid black;
padding: 0.8rem;
font-size: 2rem;
margin: 1rem 0;
margin-top: 1rem;
color: black;
border-radius: 0.8rem;
background-color: #e67e22;
`;



const Text = styled.h2`
font-size: 5.5vw;
width: 100%;
text-align: center;

@media only screen and (min-width: 780px){
    font-size: 3vw;
}
`;

const Icon = styled.img`
margin: 2rem 0;
height: 20%;

@media only screen and (min-width: 780px){
    height: 15rem;
}
`;