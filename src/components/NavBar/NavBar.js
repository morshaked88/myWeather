import React from 'react';
import styled from 'styled-components';
import { useData } from '../../Store/WeatherProvider';

import BurgerMenu from './burger/BurgerMenu';
import Drawer from './burger/Drawer';
import Logo from './Logo/Logo';
import Links from './Links/Links';

const NavBar = () => {

    const { isOpen, setOpen } = useData();

    return (
        <MainBox>
            <Nav>
                <BurgerMenu onClick={() => setOpen(!isOpen)} />
                <Logo />
                <Box>
                    <Links />
                </Box>
            </Nav>
        </MainBox>
    )
};

export default NavBar;

const MainBox = styled.div`
width: 100%;
`;

const Box = styled.div`
display: flex;
justify-content: space-between;
width: 45%;
`;

const Nav = styled.nav`
        height: 70px;
        width: 100%;
        background-color: #e67e22;

        //desktop responsive
        @media only screen and (min-width: 780px){
        padding: 0 15%;
        display: flex;
        align-items: center;
        justify-content: space-between
            }
`;