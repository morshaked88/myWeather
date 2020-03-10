import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => (
  <Container>
    <Grid>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Grid>
  </Container>
);

export default Loader;

const Delay = keyframes`
0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
`;

const Grid = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;


  & div{
  width: 33%;
  height: 33%;
  background-color: #333;
  float: left;
  -webkit-animation: ${Delay} 1.3s infinite ease-in-out;
          animation: ${Delay} 1.3s infinite ease-in-out; 

  background-color: #e67e22;
  }

&:nth-child(1)  {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
&:nth-child(2)  {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
&:nth-child(3)  {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
&:nth-child(4)  {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
&:nth-child(5)  {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
&:nth-child(6)  {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
&:nth-child(7)  {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
&:nth-child(8)  {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
&:nth-child(9)  {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
`;

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;