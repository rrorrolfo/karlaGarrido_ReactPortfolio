import React from "react";

const Profile = () => {
    return (
    <div id="profile">
        <p className="actress">Karla Garrido</p>
        <ul className="characteristics stats">
            <li>Actriz Mexicana</li>
            <li>Estatura: 1.60m</li>
            <li>Peso: 47kg</li>
        </ul>

        <ul className="characteristics idiomas">
            <li>Idiomas:</li>
                <ul>
                <li> Español Latinoamericano</li>
                <li>Ingles: 90%</li>
                </ul>
            <li className="pass">Pasaporte y Visa vigentes</li>
        </ul>
    </div>
    )
}

export default Profile;