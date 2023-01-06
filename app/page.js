import classes from "/styles/main.module.css"
import Image from "next/image"
import bg from "/images/top.png"
import characters from "/data/characters.json"

function CharacterInformation({ item }) {
    return (
        <div className={classes.charinfo}>
            <h4 className={classes.charactername}>{item.EnglishName ?? item.Name.split("[")[0]}</h4>
            <h6 className={classes.charactername}>{item.Name}</h6>
        </div>
    )
}

function CharIcon({ item }) {
    return (
        <div className={classes.iconcontainer}>
            <img
                src={item.Icon ?? ""}
                className={classes.icon}
            />
            <div className={classes.charoverlay}>
                <div className={classes.overlayrarity}>
                    <div className={classes.gradient}></div>
                    <CharacterInformation item={item} />
                </div>
            </div>
            {/* {item.Name} */}
        </div>
    )
}

function Home() {
    return (
        <>
            <div className={classes.main_header} style={{
                backgroundImage: `url(${bg.src})`,
            }}>
            </div>
            <main>
                <article>
                    <div className={classes.characterlist}>
                        {characters.map((item, i) => (
                            <CharIcon key={i} item={item}></CharIcon>
                        ))}
                    </div>
                </article>
            </main>
        </>
    )
}

export default Home