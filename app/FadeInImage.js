'use client';
import React, { useState } from 'react';
import classes from "/styles/main.module.css"


function FadeInImage(props) {
    const [Loaded, setLoaded] = useState(false);

    return (
        <img
            src={props.src}
            className={Loaded ? `${props.className} ${classes.loaded}` : `${props.className} ${classes.loading}`}
            onLoad={() => setLoaded(true)}
        />
    )
}

export default FadeInImage;

