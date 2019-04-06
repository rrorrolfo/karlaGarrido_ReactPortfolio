import React from "react";
import img from "../../img/galeriaImgs/18hermana.jpg";
import suelo from "../../img/galeriaImgs/1suelo.jpg";
import triciclo from "../../img/galeriaImgs/16triciclo.jpg";

const Galeria = () => {
    return(
        <div className="Galeria">

            <h1>Galeria de fotos</h1>

            <div className="gallery_container">
                <div className="photo-container">
                    <div className="foto">
                    <img src={ img } alt="Foto de galeria"/>
                        <div className="sobre-foto"> 
                        <h3>Mucho ruido y pocas nueces de William Shakespeare</h3>
                        <p>Dirección: Juan Mora (2011)<br/>Teatro: Julio Castillo</p>
                        </div>
                    </div>
                </div>

                <div class="photo-container">
                    <div class="foto">
                    <img src={ suelo } alt="Foto de galeria"/>
                        <div class="sobre-foto"> 
                        <h3>Mucho ruido y pocas nueces de William Shakespeare</h3>
                        <p>Dirección: Juan Mora (2011)<br/>Teatro: Julio Castillo</p>
                        </div>
                    </div>
                </div>

                <div class="photo-container">
                    <div class="foto">
                    <img src={ triciclo } alt="Foto de galeria"/>
                        <div class="sobre-foto"> 
                        <h3>Mucho ruido y pocas nueces de William Shakespeare</h3>
                        <p>Dirección: Juan Mora (2011)<br/>Teatro: Julio Castillo</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Galeria;