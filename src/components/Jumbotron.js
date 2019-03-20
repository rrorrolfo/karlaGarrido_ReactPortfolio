import React from "react";
const portada_lg = require("../img/portada.jpg");
const portada_mediana = require("../img/medium_portada.jpg");
const portada_md = require("../img/mobile_portada2.jpg");
const portada_sm = require("../img/mobile_portada3.jpg");

const Jumbotron = () => {
    return (
        <div id="jumbotron">
            <img src={ portada_sm } className="portada_sm" alt="Actriz Mexicana Karla Garrido" title="Actriz Mexicana Karla Garrido"/>
            <img src={ portada_md } className="portada_md" alt="Actriz Mexicana Karla Garrido" title="Actriz Mexicana Karla Garrido"/>
            <img src={ portada_mediana } className="portada_mediana" alt="Actriz Mexicana Karla Garrido" title="Actriz Mexicana Karla Garrido"/>
            <img src={ portada_lg } className="portada_lg" alt="Actriz Mexicana Karla Garrido" title="Actriz Mexicana Karla Garrido"/>

            <div id="presentation_text">
                <p>Karla Garrido</p>
                <p>Actriz</p>
            </div>
        </div>
    )
}

export default Jumbotron;