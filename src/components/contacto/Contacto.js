import React, { Component } from "react";
const karla_sonriendo = require("../../img/sonriendo.jpg");

class Contacto extends Component {

    handleSubmit = event => {

        event.preventDefault();
        this.validateEmptyField("nombre");
        this.validateEmptyField("subject");
        this.validateEmptyField("message");
        this.validateEmail();

    }

    /* From field validation methods*/

    /**
    * @param {string} field_id - Id property of the input that will be targeted to be performed a text validation upon.
    */
    validateEmptyField = field_id => {

        // Displays an error message if the field is empty
        const field_to_validate = document.querySelector(`#${field_id}`);

        if (field_to_validate.value === "") {
            field_to_validate.nextElementSibling.className = "validation_error";
             field_to_validate.classList.add("validation_error_background")
        } else {
            field_to_validate.nextElementSibling.className = "validation_error is_hidden";
            field_to_validate.className =  "";
        }

    }

    // Validates that the email contains @ and a domain
    validateEmail = () => {

        const email_field = document.querySelector("#email");
        const email_regex = email => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);

        if (email_regex(email_field.value) === false) {
            email_field.nextElementSibling.className = "validation_error";
            email_field.classList.add("validation_error_background");
            return false
        } else {
            email_field.nextElementSibling.className = "validation_error is_hidden";
            email_field.className = "";
            return true
        }

    }

    realTimevalidation = event => {
        this.validateEmptyField(event.target.id);
    }

    componentDidMount = () => {

        //Creates error messages and hides them
        const inputs = document.querySelectorAll(".input_container");

        for (let i = 0; i < inputs.length; i += 1 ) {

            const input = inputs[i];
            const error_message = ["Ingresa tu nombre.", "Tu correo electronico debe de tener una @ y un dominio. Ejemplo: pepe@ejemplo.com", "Ingresa el motivo de tu contacto.", "Ingresa el texto de tu mensaje."]
            const validation_error = document.createElement("P");

            validation_error.textContent = error_message[i];
            validation_error.className = "validation_error is_hidden";
            
            input.appendChild(validation_error);

        }

    }

    render() {

        return(
            <div id="contacto_container" className="sticky_footer">

                <form onSubmit={this.handleSubmit} className="margin_centered">

                    <div className="input_container">
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" onKeyUp={ this.realTimevalidation }/>
                    </div>

                    <div className="input_container">
                        <input type="email" id="email" name="email" placeholder="Correo Electronico" onKeyUp={ this.validateEmail }/>
                    </div>

                    <div className="input_container">
                        <input type="text" id="subject" name="subject" placeholder="Asunto" onKeyUp={ this.realTimevalidation }/>
                    </div>
                    
                    <div className="input_container">
                        <textarea id="message" rows="4" name="message" placeholder="Mensaje" onKeyUp={ this.realTimevalidation }></textarea>
                    </div>

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