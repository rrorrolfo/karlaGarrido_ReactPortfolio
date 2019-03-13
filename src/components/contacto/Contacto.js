import React, { Component } from "react";
const karla_sonriendo = require("../../img/sonriendo.jpg");

class Contacto extends Component {

    render() {

        return(
            <div id="contacto_container">

                <form className="margin_centered">

                    <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>

                    <input type="email" id="email" name="email" placeholder="Correo Electronico"/>

                    <input type="text" id="subject" name="subject" placeholder="Asunto"/>
                    
                    <textarea id="message" rows="4" name="message" placeholder="Mensaje"></textarea>

                    <button type="submit" id="submit">Enviar</button>

                </form>

                <div id="img_wrapper">
                  <img src={karla_sonriendo} alt="Contacto a  Karla Garrido" title="Contacto a Karla Garrido" id="contacto_img"/>
                </div>

            </div>
        )

    }
    
}

export default Contacto;