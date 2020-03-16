import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/WeatherProvider';
import Error from '../../Error/Error';




const WeeklyMain = ({ data }) => {

    const { isChecked, undefindLocation, currentDay, setCurrentDay, weeklyName, is_error } = useData();


    useEffect(() => {


    }, [])


    const iconImage = `/img/weather/${data[currentDay].icon}.png`;

    const newDates = data.map(obj => {

        const date = obj.dt.split(',');
        const day = date[0].split('').slice(0, 3).join('');
        const dateShort = date[1];
        const final = [day, dateShort];
        return (final)
    })

    const tabColor = (num) => {
        if (currentDay === num) {
            return '#e67e22'
        } else {
            return 'white'
        }
    }

    const error = is_error;

    return (
        <Box>
            {error ?
                <Error text='city not found' />
                :
                <WeeklyBox>
                    <Dates>
                        <Date onClick={() => setCurrentDay(0)} style={{ backgroundColor: `${tabColor(0)}` }}>
                            <P>{newDates[0][0]}</P>
                            <P>{newDates[0][1]}</P>
                        </Date>
                        <Date onClick={() => setCurrentDay(1)} style={{ backgroundColor: `${tabColor(1)}` }} >
                            <P>{newDates[1][0]}</P>
                            <P>{newDates[1][1]}</P>
                        </Date>
                        <Date onClick={() => setCurrentDay(2)} style={{ backgroundColor: `${tabColor(2)}` }}>
                            <P>{newDates[2][0]}</P>
                            <P>{newDates[2][1]}</P>
                        </Date>
                        <Date onClick={() => setCurrentDay(3)} style={{ backgroundColor: `${tabColor(3)}` }}>
                            <P>{newDates[3][0]}</P>
                            <P>{newDates[3][1]}</P>
                        </Date>
                        <Date onClick={() => setCurrentDay(4)} style={{ backgroundColor: `${tabColor(4)}` }}>
                            <P>{newDates[4][0]}</P>
                            <P>{newDates[4][1]}</P>
                        </Date>
                    </Dates>
                    <Weather>
                        <Text>{weeklyName === null ? undefindLocation : weeklyName}</Text>
                        <Icon src={iconImage} alt='weather img' />
                        <TextBox>
                            <Text>{data[currentDay].weatherText}</Text>
                            <Text>Tempeture: {
                                isChecked ?
                                    data[currentDay].Temp.metric
                                    :
                                    data[currentDay].Temp.imperial
                            }</Text>
                            <Text>Humidity: {data[currentDay].humidity}%</Text>
                        </TextBox>
                    </Weather>
                </WeeklyBox>
            }
        </Box>
    )
};

export default WeeklyMain;

const Icon = styled.img`
margin: 2rem 0;
height: 20%;
`;

const TextBox = styled.div`
text-align: center;
`;

const Weather = styled.div`
border-top: 0.1rem solid black;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2rem;
`;

const Text = styled.h2`
font-size: 5vw;
width: 100%;
text-align: center;
`;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1rem;
margin-top: 5rem;
`;

const WeeklyBox = styled.div`
width: 100%;
border-radius: 0.8rem;
border: 0.1rem solid black;
display: flex;
flex-direction: column;
`;

const Dates = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`;

const Date = styled.div`
text-align: center;
padding: 0.5rem;
border-right: 0.1rem solid black;
margin: 0;
flex: 1;

&:nth-child(5){
    border-right: none;
    border-top-right-radius: 0.8rem;
}
&:nth-child(1){
    border-top-left-radius: 0.8rem;
}

`;

const P = styled.p`
font-size: 3.5vw;
`;