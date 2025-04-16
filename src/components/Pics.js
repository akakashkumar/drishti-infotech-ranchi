import { useState } from "react"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Gallery(){
      const [sliderPics, setSliderPics] = React.useState([
        "ig-1.jpg",
        "ig-2.jpg",
        "ig-3.jpg",
        "ig-4.jpg",
        "ig-5.jpg",
      ]);
    const [pics, setPics] = useState(['banner1.jpg','banner.webp','holi.webp','neon-flame.webp','c.jpg','dca.jpg','dtp.jpg','tally.jpg','adca.jpg','graphic-designing.jpg','hi-en-typing.jpg','video-editing.jpg'])
    return(
        <section >
            <div className="  mx-auto pb-10">
                  <Carousel
                  plugins={[Autoplay({delay: 2000})]}
                  className="w-full ">
                    <CarouselContent>
                      {sliderPics.map((pic, i) => {
                        return (
                          <CarouselItem key={i} >
                            <div>
                              <Card className='p-0'>
                                <CardContent className="p-0 ">
                                  <img className="w-full rounded h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]" src={pic} alt="" />
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    
                  </Carousel>
                </div>
            <h2 className="text-xl text-orange-500  tracking-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5 text-center lg:text-left font-[MachinaR]">Gallery</h2>
            <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {pics.map((e, i)=>{
                    return(
                        <img className=" rounded hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200" key={i} src={e} alt="" />
                    )
                })}
            </div>
        </section>
    )
}