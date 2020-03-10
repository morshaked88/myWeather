import React from 'react';
import styled from 'styled-components';
import SlideShow from './SlideShow/SlideShow';
import Logo from '../NavBar/Logo/Logo';
import DesktopIntro from './SlideShow/DesktopIntro';


const Home = () => {

    const deviceWidth = window.innerWidth;

    return (
        <Box>
            {deviceWidth <= 850 ?
                <LogoBox>
                    <Logo />
                    <Summerize>
                        MyWeather, recognized and documented as the most accurate source of weather forecasts and warnings in the world, has saved tens of thousands of lives, prevented hundreds of thousands of injuries and tens of billions of dollars in property damage
                    </Summerize>
                </LogoBox>
                :
                <DesktopIntro />}

            <SlideShow />
        </Box>
    )
};

export default Home;

const Box = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        
`;

const LogoBox = styled.div`
margin-top: 1.8rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;

const Summerize = styled.p`
padding: 0 10%;
margin: 2rem 0;
font-size: 1.5rem
`;