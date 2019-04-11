import React from "react";
import "./loader.css";

const Loader = props => {
    return(
        <div className={ props.isLoading ? ("full_screen") : ("is_hidden") }>
            <div className="loader">Loading...</div>
        </div>
    )
}

export default Loader;