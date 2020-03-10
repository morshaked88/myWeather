import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const InputTag = ({ holder }) => {

    const getValue = (e) => {
        const valueOf = e.target.value;
        console.log(valueOf)
        return valueOf;
    }



    return (
        <Form>
            <Input type='text' placeholder={holder} onChange={(e) => getValue()} />
            <Button type='submit' ><FaSearch style={{ fontSize: '20px' }} /></Button>
        </Form>
    )
};

export default InputTag;

const Form = styled.form`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
margin: 1rem 0;
height: 4rem;
border-bottom-left-radius: 0.6rem;
border-top-left-radius: 0.6rem;
border: 1px solid black;
width: 70%;
padding-left: 0.5rem;
outline: none;

@media only screen and (min-width: 780px){
    width: 40%;
}
`;

const Button = styled.button`
height: 4rem;
padding: 0.5rem 1rem;
border-bottom-right-radius: 0.6rem;
border-top-right-radius: 0.6rem;
border-right: 1px solid black;
border-top: 1px solid black;
border-bottom: 1px solid black;
border-left: none;
background-color: #e67e22;
`;