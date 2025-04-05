import { useState } from "react"

export default function Gallery(){
    const [pics, setPics] = useState(['banner1.jpg','banner.webp','holi.webp','neon-flame.webp','c.jpg','dca.jpg','dtp.jpg','tally.jpg','adca.jpg','graphic-designing.jpg','hi-en-typing.jpg','video-editing.jpg'])
    return(
        <section >
            <h2 className="text-xl text-orange-500  tracking-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5 text-center lg:text-left font-[MachinaR]">Gallery</h2>
            <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {pics.map((e, i)=>{
                    return(
                        <img className=" rounded" key={i} src={e} alt="" />
                    )
                })}
            </div>
        </section>
    )
}