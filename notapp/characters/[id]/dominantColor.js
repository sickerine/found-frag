'use client';
import characters from "/data/characters.json"



function Style(params) {
    let STYLES = `html {
        --dominantColor1: ${characters[params.id].DominantColors[0]};
        --dominantColor2: ${characters[params.id].DominantColors[1]};
        --dominantColor3: ${characters[params.id].DominantColors[2]};
        --dominantColor4: ${characters[params.id].DominantColors[3]};
        --dominantColor5: ${characters[params.id].DominantColors[4]};
    }`
    return (<>
        <style>{STYLES}</style>
        {/* <GlobalStyles /> */}
    </>)
}

export default Style