import characters from "/data/characters.json"
import classes from "/styles/main.module.css"
import DominantColors from "./dominantColor.js"
import MainHeader from "../../MainHeader.js"


function CharacterPage({ params }) {

    return (
        <>
            <DominantColors id={params.id} />
            <MainHeader className={classes.character_header} src={characters[params.id].Pact5}
                children={<div></div>} />
            <div className={classes.character_body}>
                <nav>
                    <div>Stats</div>
                    <div>Abilities</div>
                    <div className={classes.active}>Gallery</div>
                </nav>
                <div>
                    <div className={classes.title}>GALLERY</div>
                    <div className={classes.content}>
                        <div className={classes.gallery}>
                            <div>
                                <img src={characters[params.id].Pact1} />
                            </div>
                            <div>
                                <img src={characters[params.id].Pact5} />
                            </div>
                            {/* <img src={characters[params.id].Pact1} />
                            <img src={characters[params.id].Pact5} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterPage

