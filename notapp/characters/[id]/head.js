import characters from "/data/characters.json"

function Head({params})
{
    const title = "Characters / " + (characters[params.id].EnglishName);

    let Style = `html {
        --dominantColor1: ${characters[params.id].DominantColors[0]};
        --dominantColor2: ${characters[params.id].DominantColors[1]};
        --dominantColor3: ${characters[params.id].DominantColors[2]};
        --dominantColor4: ${characters[params.id].DominantColors[3]};
        --dominantColor5: ${characters[params.id].DominantColors[4]};
    }`

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>{title}</title>
        </>
    )
}

export default Head;