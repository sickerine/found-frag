'use client';
import characters from "/data/characters.json"
import classes from "/styles/main.module.css"


function Gallery({params}) {
    return (
        < div className={classes.gallery} >
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