import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/WeatherProvider';

const BurgerMenu = () => {
    const { setOpen } = useData();

    return (
        <Box onClick={() => setOpen(true)}>
            <Line />
            <Line />
            <Line />
        </Box>
    )
};

export default BurgerMenu;

const Box = styled.div`
height: 100%;
width: 10%;
margin-left: 5%;
padding: 20px 0;
display: flex;
flex-direction: column;
justify-content: space-between;

//desktop responsive
@media only screen and (min-width: 780px){
    display: none;
}
`;

const Line = styled.div`
background-color: white;
width: 100%;
height: 0.5rem;
border-radius: 0.7rem;
`;