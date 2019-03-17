import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    const toogle_menu = () => {
        const nav_menu = document.querySelector(".main_nav");
        
        nav_menu.className === "main_nav" ? (
            nav_menu.classList.add("is_display")
            ) : (
            nav_menu.className = "main_nav"
        )
    }

    return (
        <React.Fragment>

            <div onClick={ toogle_menu }>
                <svg xmlns="http://www.w3.org/2000/svg" id="menu_bars" viewBox="0 0 50 50" version="1.1" width="30px" height="40px" >
                    <g id="surface1">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z "/>
                    </g>
                </svg>
            </div>

            <ul className="main_nav">
                <li onClick={ toogle_menu }><NavLink to="/acerca" className="link">Acerca</NavLink></li>
                <li onClick={ toogle_menu }><NavLink to="/portafolio" className="link">Portafolio</NavLink></li>
                <li onClick={ toogle_menu }><NavLink to="/trayectoria" className="link">Trayectoria</NavLink></li>
                <li onClick={ toogle_menu }><NavLink to="/demos" className="link">Demo Reel</NavLink></li>
                <li onClick={ toogle_menu }><NavLink to="/contacto" className="link">Contacto</NavLink></li>
            </ul>

        </React.Fragment>
    )
}

export default Nav;