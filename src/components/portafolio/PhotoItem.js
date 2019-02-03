import React from "react";

const PhotoItem = ( props ) => {
    return (
        <div className="photo_wrapper">
            <img src={ props.path } alt={ props.data.alt } title= { props.data.title }/>
        </div>
    )
}

export default PhotoItem;