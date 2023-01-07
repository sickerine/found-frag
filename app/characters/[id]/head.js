import characters from "/data/characters.json"

function Head({params})
{
    const title = "Characters / " + (characters[params.id].EnglishName);

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>{title}</title>
        </>
    )
}

export default Head;