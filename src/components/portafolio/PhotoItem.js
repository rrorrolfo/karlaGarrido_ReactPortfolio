import React from "react";

const PhotoItem = ({ path, data}) => {
    return (
        <div className="photo_wrapper">
            <img src={ path } alt={ data.alt } title= { data.title }/>
        </div>
    )
}

export default PhotoItem;