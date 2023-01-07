import characters from "/data/characters.json"
import classes from "/styles/main.module.css"
import DominantColors from "./dominantColor.js"


function CharacterPage({params})
{
   
    return (
        <>
            <DominantColors id={params.id}/>
            <div className={classes.character_header} style={{
                backgroundImage: `url(${characters[params.id].Pact5})`,
            }}>
                <div></div>
            </div>
            <div className={classes.character_body}>
                <nav>
                    <div className={classes.active}>Stats</div>
                    <div>Abilities</div>
                    <div>Gallery</div>
                </nav>
                <div>
                    <div className={classes.title}>STATS</div>
                    <div className={classes.content}></div>
                </div>
            </div>
        </>
    )
}

export default CharacterPage

