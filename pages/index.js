import Head from 'next/head'
import classes from '../styles/main.module.css'
import characters from "/data/characters.json"
import FadeInImage from "/components/FadeInImage.js"
import Link from 'next/link'
import MainHeader from "/components/MainHeader.js"

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
            <MainHeader className={classes.main_header} src={"https://cdn.discordapp.com/attachments/633768073068806144/1062479978878476329/top-min.png"} />
            <Head>
                <title>Home</title>
            </Head>
            <article>
                <div className={classes.characterlist}>
                    {characters.map((item, i) => (
                        <CharIcon key={i} item={item} id={i}></CharIcon>
                    ))}
                </div>
            </article>
        </>
    )
}

export default Home;