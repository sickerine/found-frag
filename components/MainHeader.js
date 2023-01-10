import React, { useState, useEffect } from 'react';
import classes from '/styles/main.module.css';

export default function MainHeader(props) {
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
        <div className={props.className} >
            <div className={isCached ? `${classes.mainbg}` : (isImageLoaded ? `${classes.mainbg} ${classes.loaded}` : `${classes.mainbg} ${classes.loading}`)} style={{
            backgroundImage: `url(${props.src})`,
        }}></div>
            {props.children ? props.children : null}
        </div>
    );
}