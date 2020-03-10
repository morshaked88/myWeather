import React from 'react';
import styled from 'styled-components'

const funcName = ({ title }) => (
    <Box>
        <H1>
            {title}
        </H1>
    </Box>
);

export default funcName;

const H1 = styled.h1`
font-size: 3rem;
margin: 1rem 0;
text-transform: uppercase;

&::after{
    content: "";
    width: 20rem;
    height: 0.2rem;
    background-color: black;
    display: block;
    margin: 0 auto;
}
`;

const Box = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;