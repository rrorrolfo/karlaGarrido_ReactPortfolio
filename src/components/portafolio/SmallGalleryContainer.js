import React from "react";
import PhotoItem from "./PhotoItem";
import { photos } from "../../data/gallery.json";
const images = [
    require("../../img/closeupkarla.jpg"),
    require("../../img/fotoimpresion.jpg"),
    require("../../img/blancoynegro.jpg"),
    require("../../img/completa.jpg")
]

const photoitems = images.map( (image, index) => <PhotoItem path={image} data={photos.portafolio_photos[index]} key={photos.portafolio_photos[index].id}/>);

const SmallGalleryContainer = () => {
    return (
        <div className="galleryContainer">
            <p className="year">2019</p>
            {photoitems}
        </div>
    )
}

export default SmallGalleryContainer;
