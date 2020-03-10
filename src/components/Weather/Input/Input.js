import React from 'react';
import styled from 'styled-components';

const InputTag = ({ holder }) => (
    <Box>
        <Input type='text' placeholder={holder} />
    </Box>
);

export default InputTag;

const Box = styled.div`
width: 100%;
display: flex;
justify-content: center;

`;

const Input = styled.input`
margin: 1rem 0;
height: 4rem;
border-radius: 0.6rem;
border: 1px solid black;
width: 80%;
padding-left: 0.5rem;
outline: none;
`;