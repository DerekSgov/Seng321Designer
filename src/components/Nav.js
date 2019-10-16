import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Our Mission</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Our Team</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Requirements Document</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="RSD">
                    <a href="#">Requirements Specification Document</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
