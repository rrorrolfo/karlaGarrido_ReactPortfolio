import React from "react";
const portada = require("../img/portada.jpg");

const Jumbotron = () => {
    return (
        <div id="jumbotron">
            <img src={ portada } alt="Actriz Mexicana Karla Garrido" title="Actriz Mexicana Karla Garrido"/>
            <div id="presentation_text">
                <p>Karla Garrido</p>
                <p>Actriz</p>
            </div>
        </div>
    )
}

export default Jumbotron;