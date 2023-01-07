import characters from "/data/characters.json"
import classes from "/styles/main.module.css"
import DominantColors from "./dominantColor.js"
import MainHeader from "../../MainHeader.js"

function Info({ Title, Value }) {
    return (
        <div className={classes.info}>
            <div>{Title}</div>
            <div>{Value}</div>
        </div>
    )
}


function CharacterPage({ params }) {
    const DominantColor = (which) => ("rgb(" + characters[params.id].DominantColors[which] + ")")


    return (
        <>
            <DominantColors id={params.id} />
            <MainHeader className={classes.character_header} src={characters[params.id].Pact5}
                children={<div></div>} />
            <div className={classes.character_body}>
                <nav>
                    <div className={classes.active}>Stats</div>
                    <div>Abilities</div>
                    <div >Stats</div>
                </nav>
                <div className={classes.body_right}>
                    <div className={classes.title}>Stats</div>
                    <div className={classes.content}>

                        <div className={classes.stats}>
                            <div className={classes.charactericoncontainer}>
                                <div className={classes.charactericon}>
                                    <img src={characters[params.id].Icon} />
                                    <div className={classes.stars}>
                                        {
                                            Array(characters[params.id].Rarity).fill().map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                <path stroke={"rgba(0,0,0)"} strokeWidth="2" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill={DominantColor(4)}/>
                                                </svg>
                                            ))
                                        } 
                                    </div>
                                </div>
                            </div>
                            <div className={classes.statscontainer}>
                                <div className={classes.infodump}>
                                    <Info Title="Rarity" Value={characters[params.id].Rarity}></Info>
                                    <Info Title="Element" Value={characters[params.id].Element}></Info>
                                    <Info Title="Position" Value={characters[params.id].Position}></Info>
                                    <Info Title="VA" Value={characters[params.id].VA}></Info>
                                </div>
                                <div className={classes.statnumbers}>
                                    <ul>
                                        <div>BP</div>
                                        <div>HP</div>
                                        <div>ATK</div>
                                    </ul>
                                    <ul>
                                        <div>{characters[params.id].Strength}</div>
                                        <div>{characters[params.id].Health}</div>
                                        <div>{characters[params.id].Attack}</div>
                                    </ul>
                                </div>
                            </div>
                                                            
                        </div>
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
                <div className={classes.character_name}>
                    {characters[params.id].EnglishName}
                    <p className={classes.character_title}>{characters[params.id].Name}</p>
                </div>
            </div>
        </>
    )
}

export default CharacterPage

