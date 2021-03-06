import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/WeatherProvider';

import Loader from '../Loading/Loader';
import Title from '../Headers/Title';
import Input from './Input/InputToday';
import TodayMain from './TodayMain/TodayMain';
import SwitchKey from '../Layout/SwitchKey';

const Today = () => {
    const { defultToday, todayWeather, fetchingToday } = useData();

    const weatherObj = fetchingToday ? defultToday : todayWeather;


    return (
        <Box>
            <Title title='Today Weather' />
            <Input holder='Enter location for Today weather' />
            <Switch>
                <SwitchKey />
            </Switch>
            <MainBox>
                {defultToday === null ? <Loader />
                    :
                    <TodayMain obj={weatherObj} />}
            </MainBox>
        </Box>
    )
};

export default Today;


const Box = styled.div`
height: 100%;
width: 100%;
`;

const MainBox = styled.div`
height: 100%;
`;

const Switch = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;