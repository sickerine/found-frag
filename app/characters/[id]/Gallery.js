'use client';
import characters from "/data/characters.json"
import classes from "/styles/main.module.css"
import { useEffect, useState } from 'react';

function Gallery({params}) {
    const [open, setOpen] = useState("Pact1")

    useEffect(() => {window.document.scrollingElement?.scrollTo(0, 0)}, [])
    
    return (
        < div className={classes.gallery} >
            {/* {open != 0 &&  */}
            {/* <img className={classes.fullscreen}>

            </img> */}
            {/* } */}
            <div>
                <img className={classes.pact1art} src={characters[params.id].Pact1} />
            </div>
            <div>
                <img className={classes.pact5art} src={characters[params.id].Pact5} />
            </div>
            {/* <img src={characters[params.id].Pact1} />
                            <img src={characters[params.id].Pact5} /> */}
        </div >
    )
}

export default Gallery;