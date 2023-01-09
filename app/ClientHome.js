'use client';
import { useEffect, useLayoutEffect } from 'react'

function Home()
{
    // useLayoutEffect(() => {
    //     window.addEventListener("popstate", () => {
    //         window.document.scrollingElement?.scrollTo(0, sessionStorage.getItem("scrollY"))
    //     })
    // })

    useEffect(() => {
        window.document.scrollingElement?.scrollTo(0, sessionStorage.getItem("scrollY"))
        window.addEventListener('scroll', function (evt) {
            console.log(window.location.pathname)
            if (window.location.pathname == "/")
                sessionStorage.setItem("scrollY", window.scrollY)
        });   
    }, [])

    return (
        <></>
    )
}

export default Home;