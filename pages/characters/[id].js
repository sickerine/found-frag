import { useRouter } from 'next/router';
import classes from "/styles/main.module.css";
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head'
import FadeInImage from '../../components/FadeInImage';
import MainHeader from '../../components/MainHeader';
import fs from 'fs'
import path from 'path'


function Gallery(params) {
    const [open, setOpen] = useState("Pact1")
    
    return (
        < div className={classes.gallery} >
            {/* {open != 0 &&  */}
            {/* <FadeInImage className={classes.fullscreen}>

            </FadeInImage> */}
            {/* } */}
            <div onClick={() => {params.setZoomImage("Pact1"); params.setZoomOpen(true)}} >
                <FadeInImage className={classes.pact1art} src={params.obj.Pact1} />
            </div>
            <div onClick={() => {params.setZoomImage("Pact5"); params.setZoomOpen(true)}}>
                <FadeInImage className={classes.pact5art} src={params.obj.Pact5} />
            </div>
            {/* <FadeInImage src={characters[params.id].Pact1} />
                            <FadeInImage src={characters[params.id].Pact5} /> */}
        </div >
    )
}


function Info({ Title, Value }) {
    return (
        <div className={classes.info}>
            <div>{Title}</div>
            <div>{Value}</div>
        </div>
    )
}

function GetPassive(params) {
    let ChainIcons = ["https://cdn.discordapp.com/attachments/633768073068806144/1061433958744735814/2cbefdbcb1478e88ecaca3135612b83a.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433959151566948/b7d3e1313cb213b005db6bb64b65ad83.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433958358863942/f9ffac3600c0014ad79f94ad9f7d354c.png"];
    let Name = ["1st", "2nd", "3rd"]


    let Desc = (string) => {
        string = string.replaceAll("＜", "<").replaceAll("＞", ">")
        let Split = string.split("<Pact 15>")
        if (Split[1])
        {
            return (
                <>
                <p>{Split[0]}</p><span className={classes.Pact15}>Pact 15</span><p>{Split[1]}</p>
                </>
            )
        }
        return string
    }

    return (
        <div className={`${classes.chain}  ${classes.trait}`}>
            <div className={`${classes.chainmain}  ${classes.trait}`}>
                <div className={`${classes.chaininfo}  ${classes.trait}`}>
                    <div className={`${classes.chainname}  ${classes.trait}`}>
                        {/* <FadeInImage src={ChainIcons[params.number - 1]}></FadeInImage> */}
                        <p>Traits</p>
                    </div>
                </div>
            </div>
            <div className={classes.chaindesc}>{Desc(params.obj[`Passive1`])}</div>
            <div className={classes.chaindesc}>{Desc(params.obj[`Passive2`])}</div>
        </div>
    )
}

function GetChain(params) {
    let ChainIcons = ["https://cdn.discordapp.com/attachments/633768073068806144/1061433958744735814/2cbefdbcb1478e88ecaca3135612b83a.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433959151566948/b7d3e1313cb213b005db6bb64b65ad83.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433958358863942/f9ffac3600c0014ad79f94ad9f7d354c.png"];
    let Name = ["1st", "2nd", "3rd"]

    return (
        <div className={classes.chain}>
            <div className={classes.chainmain}>
                <div className={classes.chaininfo}>
                    <div className={classes.chainname}>
                        <FadeInImage src={ChainIcons[params.number - 1]}></FadeInImage>
                        <p>{Name[params.number - 1]} <span>Chain Attack</span></p>
                    </div>
                    <div className={classes.chaindata}>
                        <div className={classes.chaincost}>
                            <div>Cost</div>
                            <div>{params.obj[`C${params.number}Cost`]}</div>
                        </div>
                        <div className={classes.chaincd}>
                            <div>Cooldown</div>
                            <div>{params.obj[`C${params.number}Cooldown`]}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.chainrange}>
                    <FadeInImage src={params.obj[`C${params.number}Image`]}></FadeInImage>
                    <div></div>
                </div>
            </div>
            <div className={classes.chaindesc}>{params.obj[`C${params.number}Description`]}</div>
        </div>
    )
}

function GetNormal(params) {
    let ChainIcons = ["https://cdn.discordapp.com/attachments/633768073068806144/1061433958744735814/2cbefdbcb1478e88ecaca3135612b83a.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433959151566948/b7d3e1313cb213b005db6bb64b65ad83.png", "https://cdn.discordapp.com/attachments/633768073068806144/1061433958358863942/f9ffac3600c0014ad79f94ad9f7d354c.png"];
    let Name = ["1st", "2nd", "3rd"]

    return (
        <div className={`${classes.chain}  ${classes.normal}`}>
            <div className={classes.chainmain}>
                <div className={classes.chaininfo}>
                    <div className={classes.chainname}>
                        {/* <SwordSVG/> */}
                        <p>Normal <span>Attack</span></p>
                    </div>
                    <div className={classes.chaindata}>
                        <div className={classes.chaincost}>
                            <div>Speed</div>
                            <div>{params.obj.NormalSpeed}</div>
                        </div>
                        <div className={classes.chaincd}>
                            <div>Hits</div>
                            <div>{params.obj.NormalTimes}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.chainrange}>
                    <FadeInImage src={params.obj.NormalImage}></FadeInImage>
                    <div></div>
                </div>
            </div>
            <div className={classes.chaindesc}>{params.obj.NormalDesc}</div>
        </div>
    )
}

function DominantColors(params) {
    let STYLES = `html {
        --dominantColor1: ${params.obj.DominantColors[0]};
        --dominantColor2: ${params.obj.DominantColors[1]};
        --dominantColor3: ${params.obj.DominantColors[2]};
        --dominantColor4: ${params.obj.DominantColors[3]};
        --dominantColor5: ${params.obj.DominantColors[4]};
    }`
    return (<>
        <style>{STYLES}</style>
        {/* <GlobalStyles /> */}
    </>)
}

function ImageZoom(params) {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [zoomCounter, setZoomCounter] = useState(0);
    const imgRef = useRef(null);
  
    const handleDoubleClick = (e) => {
      setZoomCounter(zoomCounter + 1)
      const zoomAmount = 1.5;
      if (zoomCounter === 0) {
          setZoom(zoom * zoomAmount);
      } else if (zoomCounter === 2){
          setZoom(1);
          setPosition({ x: 0, y: 0 });
          setZoomCounter(0)
      } else if (zoomCounter === 1) {
          setZoom(zoom * zoomAmount * zoomAmount);
      }
    };
  
    const handleMouseDown = (e) => {
        if (zoom === 1) {
            return
        }
      e.preventDefault();
      const initialX = (e.clientX / zoom) - position.x;
      const initialY = (e.clientY / zoom) - position.y;
  
      const handleMouseMove = (e) => {
        setPosition({
          x: (e.clientX / zoom) - initialX,
          y: (e.clientY / zoom) - initialY
        });
      };
  
      document.addEventListener("mousemove", handleMouseMove);
  
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMouseMove);
      });
    };
  
    return (
      <div className={classes.zoom}>
        <img 
          src={params.src} 
          style={{ 
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            cursor: zoom === 1 ? 'default' : 'move'
          }}
          onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          ref={imgRef}
        />
        <img onClick={()=> {params.setZoomOpen(false)}} src={"https://cdn.discordapp.com/attachments/633768073068806144/1063181908407763024/plus.png"} className={classes.close}/>
      </div>
    );
  }


function Character({ obj })
{
    const [zoomImage, setZoomImage] = useState("Pact5")
    const [zoomOpen, setZoomOpen] = useState(false)

    const router = useRouter();
    const { id } = router.query;
    const DominantColor = (which) => ("rgb(" + obj.DominantColors[which] + ")")
    const PageName = `Characters / ${obj.EnglishName}`

    return (
        <>
            {/* {zoomOpen && <div className={classes.zoom} onClick={()=>{setZoomOpen(false)}}>
                <FadeInImage style={zoomImage == "Pact1" ? {
                    transform: `rotate(90deg)`
                } : {}} src={obj[zoomImage]}></FadeInImage>
            </div>} */}
            {
                zoomOpen && <ImageZoom src={obj[zoomImage]} setZoomOpen={setZoomOpen}></ImageZoom>
            }
            <div className={classes.backgroundoverlay}></div>
            <Head>
                <title>{PageName}</title>
            </Head>
            <DominantColors id={id} obj={obj} />
            <MainHeader className={classes.character_header} src={obj.Pact5}
                children={<div></div>} />
            <div className={classes.character_body}>
                <nav>
                    <div className={classes.active}>Stats</div>
                    <div>Abilities</div>
                    <div>Gallery</div>
                </nav>
                <div className={classes.body_right}>
                    <div className={classes.title}>Stats</div>
                    <div className={classes.content}>
                        <div className={classes.stats}>
                            <div className={classes.charactericoncontainer}>
                                <div className={classes.charactericon}>
                                    <FadeInImage src={obj.Icon} />
                                    <div className={classes.stars}>
                                        {
                                            Array(obj.Rarity).fill().map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                    <path stroke={"rgba(0,0,0)"} strokeWidth="2" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill={DominantColor(4)} />
                                                </svg>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={classes.statscontainer}>
                                <div className={classes.infodump}>
                                    <Info Title="Rarity" Value={obj.Rarity}></Info>
                                    <Info Title="Element" Value={obj.Element}></Info>
                                    <Info Title="Position" Value={obj.Position}></Info>
                                    <Info Title="VA" Value={obj.VA}></Info>
                                    {/* <Info Title="Source" Value={obj.Get}></Info> */}
                                </div>
                            </div>
                        </div>
                        <div className={ classes.normalscontainer}>
                                <div>
                                    <div>BP</div>
                                    <div>{obj.Strength}</div>
                                </div>
                                <div>
                                    <div>ATK</div>
                                    <div>{obj.Attack}</div>
                                </div>
                                <div>
                                    <div>HP</div>
                                    <div>{obj.Health}</div>
                                </div>
                            </div>
                        <div className={classes.chains}>
                            <GetNormal id={id} number={1} obj={obj}></GetNormal>

                            <GetChain id={id} number={1} obj={obj}></GetChain>
                            <GetChain id={id} number={2} obj={obj}></GetChain>
                            <GetChain id={id} number={3} obj={obj}></GetChain>
                            <GetPassive id={id}  obj={obj}></GetPassive>
                        </div>
                        <Gallery id={id} obj={obj} setZoomOpen={setZoomOpen} setZoomImage={setZoomImage}/>
                    </div>
                </div>
                <div className={classes.character_name}>
                    {obj.EnglishName}
                    <p className={classes.character_title}>{obj.Name}</p>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({params})
{
    const filePath = path.join(process.cwd(), 'public','characters.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    return {
        props: {
            obj: data[params.id],
        }
    }
}

export async function getStaticPaths() 
{
    const filePath = path.join(process.cwd(), 'public','characters.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const paths = data.map((char, i) => {
        return {
            params: { id: i.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export default Character;