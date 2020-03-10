import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-slideshow-image';

const slideImages = [
    '/img/SlideShow/1.jpg',
    '/img/SlideShow/2.jpg',
    '/img/SlideShow/3.jpg',
    '/img/SlideShow/4.jpg',
    '/img/SlideShow/5.jpg',
    '/img/SlideShow/6.jpg',
    '/img/SlideShow/7.jpg',
    '/img/SlideShow/8.jpg'
]

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
}

const SlideShow = () => {


    return (
        <Container>
            <Zoom {...zoomOutProperties}>
                {
                    slideImages.map((each, index) => <img key={index} style={{ width: "100%", position: 'relative' }} src={each} />)
                }
            </Zoom>
        </Container>
    )
};

export default SlideShow;

const Container = styled.div`
  width: 100%;
`;