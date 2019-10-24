
import React from 'react';
import '../assets/styles/Header.scss'

const Header = () =>
{
    return(
        <header className="header">
            <h1 className="header__tittle">GGcar</h1>
            <ul className="header__links">
                <li><a href="/">Para conductores</a></li>
                <li><a href="/">Ayuda</a></li>
            </ul>
        </header>
    )
}

export default Header;