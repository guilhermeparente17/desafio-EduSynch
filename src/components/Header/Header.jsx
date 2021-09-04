import React from 'react'
import {
    HeaderContainer,
    HeaderLink,
    HeaderLogo,
    HeaderOptions,
    HeaderItems,
    HeaderButtom
} from './HeaderElements'

import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLink>
                <HeaderLogo src={Logo} />
                <HeaderOptions>
                    <HeaderItems>How it works</HeaderItems>
                    <HeaderItems>About Us</HeaderItems>
                </HeaderOptions>
            </HeaderLink>
            <HeaderButtom>Get Started</HeaderButtom>
        </HeaderContainer>
    )
}

export default Header
