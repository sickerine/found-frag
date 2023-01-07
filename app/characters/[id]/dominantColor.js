'use client';
import characters from "/data/characters.json"
import { createGlobalStyle } from 'styled-components';



function Style(params) {

    const GlobalStyles = createGlobalStyle`
    html {
        --dominantColor1: ${characters[params.id].DominantColors[0]};
        --dominantColor2: ${characters[params.id].DominantColors[1]};
        --dominantColor3: ${characters[params.id].DominantColors[2]};
        --dominantColor4: ${characters[params.id].DominantColors[3]};
        --dominantColor5: ${characters[params.id].DominantColors[4]};
    }
    `;

    return (<>
        <GlobalStyles />
    </>)
}

export default Style