'use client';
import React, { useState } from 'react';
import classes from "/styles/main.module.css"
// import { useEffect, componentDidMount } from 'react';

function MyComponent(props) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    // componentDidMount(() => {
    //     console.log("fired")
    //     window.document.scrollingElement?.scrollTo(0, sessionStorage.getItem("scroll") || 0)
    //     window.onscroll = () => {
    //         sessionStorage.setItem("scroll", window.scrollY)
    //     }
    // })
    return (
        <div className={isImageLoaded ? `${props.className} ${classes.loaded}` : `${props.className} ${classes.loaded}`} >
            <div className={classes.mainbg} style={{
            backgroundImage: `url(${props.src})`,
        }}></div>
            {props.children ? props.children : null}
            {/* <img src={props.src} style={{display: "none"}} onLoad={() => {setIsImageLoaded(true)}} ></img> */}
        </div>
    );
}

export default MyComponent;