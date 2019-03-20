import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div id="not_found">

            <p>404</p>
            <p>No se encontró la página que buscas.</p>
            <Link to="/" id="return_button">
                Ir a la página principal
            </Link>

        </div>
    )
}

export default NotFound;