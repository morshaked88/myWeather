import React from 'react';
import styled from 'styled-components'

const DesktopIntro = () => {


    return (
        <Box>
            <Title>
                MyWeathers
            </Title>
            <TextBox>
                <Text>
                    MyWeather, recognized and documented as the most accurate source of weather forecasts and warnings in the world, has saved tens of thousands of lives, prevented hundreds of thousands of injuries and tens of billions of dollars in property damage. With global headquarters in State College, PA and other offices around the world, MyWeather serves more than 1.5 billion people daily to help them plan their lives and get more out of their day through radio, television, newspapers, smart phones, tablets, connected TVs, the MyWeather Network and MyWeather.com. Additionally, MyWeather produces and distributes news, weather content, and video for more than 180,000 third-party websites.
                </Text>
            </TextBox>
        </Box>
    )
};

export default DesktopIntro;

const Box = styled.div`
position: absolute;
top: 6rem;
z-index: 2;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

const Title = styled.h1`
font-family: 'Trade Winds', cursive;
font-size: 4vw;
color: white;
-webkit-text-stroke: 1px black;
margin-top: 1.8rem;
`;


const TextBox = styled.div`
width: 40rem;
margin-top: 1.8rem;
background-color: rgba(230,126,34, 0.7);
padding: 2rem;
border-radius: 0.7rem;
border: 0.1rem solid black;
`;

const Text = styled.p`
font-size: 1vw;
text-align: center;
`;