import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <ul id="main_nav">
            <li>Acerca</li>
            <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            <li>Trayectoria</li>
            <li>Demo Reel</li>
            <li>contacto</li>
        </ul>
    )
}

export default Nav;