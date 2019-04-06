import React from "react";

const PhotoContainer = ({ source, title, textA, textB}) => {
    return(

        <div className="photo-container">
            <div className="foto">
            <img src={ source } alt="Foto de galeria"/>
                <div className="sobre-foto"> 
                    <h3>{ title }</h3>
                    <p>{ textA } <br/>{ textB }</p>
                </div>
            </div>
        </div>
        
    )
}

export default PhotoContainer;