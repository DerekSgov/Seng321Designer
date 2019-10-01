import React from 'react'

import logo from '../assets/images/profile.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Snowlutions</h1>
        <p>Predictive Avalanche Solutions</p>
    </header>
)

export default Header
