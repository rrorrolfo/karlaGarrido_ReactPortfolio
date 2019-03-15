import React from "react";
import { photos } from "../../data/gallery.json";

const Trayectoria = () => {

    const trayectoria_teatro = photos.trayectoria_teatro;
    const trayectoria_television = photos.trayectoria_television;
    const trayectoria_cine = photos.trayectoria_cine;

    /**
 * @param {object} trayectoria - Data that should be iterated over to create one item of the accordeon menu.
 * @param {sting} type - String that groups each acordeon menu item into one group
 */

    const create_acordeon_menu = (trayectoria_data, type) => {
        return trayectoria_data.map( obra => 
        <div className="tab-group" key={obra.id}>
            <div className="tab">
                <input id={`tab-${obra.id}`} type="radio" name={type}/>
                <label htmlFor={`tab-${obra.id}`}><span> + </span> {obra.title}  </label>
                <div className="tab-content">
                    {obra.description.map( (text, index) => <p key={index + 1}>{text}</p>)}
                </div>
            </div>
        </div>)
    }

    return (
        <div id="trayectoria_container">

            <div className="trayectoria_type_container">
                <p className="title_acordeon_menu">Trayectoria en Cine</p>
                { create_acordeon_menu(trayectoria_cine, "cine") }
            </div>

            <div className="trayectoria_type_container">
                <p className="title_acordeon_menu">Trayectoria en Televisión</p>
                { create_acordeon_menu(trayectoria_television, "television") }
            </div>

            <div className="trayectoria_type_container">
                <p className="title_acordeon_menu">Trayectoria en Teatro</p>
                { create_acordeon_menu(trayectoria_teatro, "teatro") }
            </div>

        </div>
    )
};

export default Trayectoria;