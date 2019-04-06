import React from "react";
import PhotoContainer from "./PhotoContainer";
import { photos } from "../../data/gallery.json"
const images = [
    require("../../img/galeriaImgs/18hermana.jpg"),
    require("../../img/galeriaImgs/16triciclo.jpg"),
    require("../../img/galeriaImgs/1suelo.jpg"),
    require("../../img/galeriaImgs/rodaje16.jpg"),
    require("../../img/galeriaImgs/barcos.jpg"),
    require("../../img/galeriaImgs/rodaje1.jpg"),
    require("../../img/galeriaImgs/muros.jpg"),
    require("../../img/galeriaImgs/rodaje3.jpg")
]

const Galeria = () => {

    const displayPhotos = () => {
        
        const galleryPhotos = photos.galleryPhotos;
        const containersToDisplay = []

        galleryPhotos.map( (photo, index) => containersToDisplay.push(<PhotoContainer 
            source={ images[index] } 
            title={ photo.title } 
            textA={ photo.textoA } 
            textB={ photo.textoB }
            />)
        )

        return containersToDisplay
    }
    

    return(
        <div className="Galeria">

            <h1>Galeria de fotos</h1>

            <div className="gallery_container">

                {displayPhotos()}

            </div>
            
        </div>
    )
}

export default Galeria;