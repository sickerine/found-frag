'use client';
import React, { useState } from 'react';
import classes from "/styles/main.module.css"

function MyComponent(props) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (
        <div className={isImageLoaded ? `${props.className} ${classes.loaded}` : `${props.className} ${classes.loaded}`} style={{
            backgroundImage: `url(${props.src})`,
        }}>
            {props.children ? props.children : null}
            <img src={props.src} style={{display: "none"}} onLoad={() => {setIsImageLoaded(true)}} ></img>
        </div>
    );
}

export default MyComponent;