import characters from "/data/characters.json"

function Head({params})
{
    const title = "Characters / " + (characters[params.id].EnglishName);

    return (
        <>
            <title>{title}</title>
        </>
    )
}

export default Head;