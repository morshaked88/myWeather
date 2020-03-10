import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useData } from '../../../Store/WeatherProvider';
import Links from '../Links/Links';

const Drawer = () => {

    const { setOpen } = useData();

    return (
        <Box>
            <Exit>
                <Out onClick={() => setOpen(false)}>
                    X
                </Out>
            </Exit>
            <LinksBox>
                <Links />
            </LinksBox>
        </Box>
    )
};

export default Drawer;

const slideIn = keyframes`
from{ width: 0}
to {width: 70%}
`;


const Box = styled.div`
height: 100vh;
width: 70%;
background-color: #d35400;
animation: ${slideIn} 0.5s linear;
display: flex;
flex-direction: column;
z-index: 2;
`;

const Out = styled.p`

`;

const Exit = styled.div`
width: 100%;
height: 10%;
color: white;
font-size: 2.5rem;
text-align: right;
padding-right: 0.8rem;
padding-top: 0.8rem;
`;

const LinksBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
`;

