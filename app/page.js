import classes from "/styles/main.module.css"
import bg from "/images/top.png"
import Link from 'next/link'
import characters from "/data/characters.json"
import FadeInImage from "./FadeInImage.js"
import MainHeader from "./MainHeader.js"

function CharacterInformation({ item }) {
    return (
        <div className={classes.charinfo}>
            <h4 className={classes.charactername}>{item.EnglishName ?? item.Name.split("[")[0]}</h4>
            <h6 className={classes.charactername}>{item.Name}</h6>
        </div>
    )
}

function CharIcon({ item, id }) {
    return (
        <Link href={"/characters/" + id}>
            <div className={classes.iconcontainer}>
                <FadeInImage
                    src={item.Icon ?? ""}
                    className={classes.icon}
                    loading="lazy"
                />
                <div className={classes.charoverlay}>
                    <div className={classes.overlayrarity}>
                        <div className={classes.gradient}></div>
                        <CharacterInformation item={item} />
                    </div>
                </div>
                {/* {item.Name} */}
            </div>
        </Link>
    )
}

function Home() {
    return (
        <>
            <MainHeader className={classes.main_header} src={bg.src}/>
            <main>
                <article>
                    <div className={classes.characterlist}>
                        {characters.map((item, i) => (
                            <CharIcon key={i} item={item} id={i}></CharIcon>
                        ))}
                    </div>
                </article>
            </main>
        </>
    )
}

export default Home