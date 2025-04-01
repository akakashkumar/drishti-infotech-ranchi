import { useState } from "react"

export default function Gallery(){
    const [pics, setPics] = useState(['banner.webp','holi.webp','neon-flame.webp','c.jpg','dca.jpg','dtp.jpg','tally.jpg','adca.jpg','graphic-designing.jpg','hi-en-typing.jpg','video-editing.jpg'])
    return(
        <section>
            <div className="conatiner mx-auto px-4 py-5 grid grid-cols-4 gap-4 ">
                {pics.map((e, i)=>{
                    return(
                        <img className="max-w-full rounded" src={e} alt="" />
                    )
                })}
            </div>
        </section>
    )
}