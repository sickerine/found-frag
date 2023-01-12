import React, { useState, useEffect } from 'react';
import classes from '/styles/main.module.css';

export default function FadeInImage(props) {
    const [isCached, setCached] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = props.src;
        if (img.complete) {
            setCached(true);
        }
        else
            img.onload = () => {
                setIsImageLoaded(true);
            };
        return () => {
            img.onload = null;
        }
    }, []);

    return (
        <img
            src={props.src}
            style={props.style}
            className={isCached ? props.className : (isImageLoaded ? `${props.className} ${classes.loaded}` : `${props.className} ${classes.loading}`)}
        />
    )
}
