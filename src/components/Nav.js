import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <ul id="main_nav">
            <li><NavLink to="/acerca">Acerca</NavLink></li>
            <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            <li><NavLink to="/trayectoria">Trayectoria</NavLink></li>
            <li><NavLink to="/demos">Demo Reel</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
    )
}

export default Nav;