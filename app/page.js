import classes from "/styles/main.module.css"
import CharIcon from "./charicon"

function Home() {
    let Data = [
        {
            Name: "Bruh",
            Icon: "bruh.jpg"
        },
        {
            Name: "Bruh",
            Icon: "bruh.jpg"
        },
        {
            Name: "Bruh",
            Icon: "bruh.jpg"
        }
    ]
    return (
        <div>
            {Data.map((item, i) => (
                <CharIcon key={i} item={item}></CharIcon>
            ))}
        </div>
    )
}

export default Home