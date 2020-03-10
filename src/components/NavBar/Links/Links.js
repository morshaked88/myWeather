import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useData } from '../../../Store/WeatherProvider';

const Links = () => {

    const { setOpen } = useData();

    return (
        <Box>
            <StyledLink to='/' onClick={() => setOpen(false)}>
                Home
    </StyledLink>
            <StyledLink to='/current' onClick={() => setOpen(false)}>
                Current Weather
    </StyledLink>
            <StyledLink to='/weekly' onClick={() => setOpen(false)}>
                Weekly Weather
    </StyledLink>
            <StyledLink to='/news' onClick={() => setOpen(false)}>
                News
    </StyledLink>
        </Box>
    )
};

export default Links;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding-left: 1rem;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
font-size: 2rem;
margin: 1.5rem 0;
transition: 0.4s all linear;

&:hover{
    transform: scale(1.1)
}
`;