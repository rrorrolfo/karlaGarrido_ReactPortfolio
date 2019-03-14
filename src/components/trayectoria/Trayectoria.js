import React from "react";
import { photos } from "../../data/gallery.json";

const Trayectoria = () => {

    const trayectoria_teatro = photos.trayectoria_teatro;

    return (
        <div id="trayectoria_container">

            <div id="teatro_container">
                <p className="title_acordeon_menu">Trayectoria en Teatro</p>
                { trayectoria_teatro.map( (obra, index) => 
                    <div className="tab-group" key={obra.id}>
                        <div className="tab">
                            <input id={`tab-${index}`} type="radio" name="tabs"/>
                            <label htmlFor={`tab-${index}`}><span> + </span> {obra.title}  </label>
                            <div className="tab-content">
                                {obra.description.map( (text, index) => <p key={index + 1}>{text}</p>)}
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Trayectoria;