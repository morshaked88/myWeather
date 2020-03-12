import React from 'react';
import styled from 'styled-components';

const Error = ({ text }) => (
    <Box>
        <Text>{text}</Text>
    </Box>
);

export default Error;

const Box = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content:center;
align-items: center;
`;

const Text = styled.h1`
font-size: 3rem;
`;