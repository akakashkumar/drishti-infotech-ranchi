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

const HeroSection = () => {
  const [sliderPics, setSliderPics] = React.useState([
    "https://imgs.search.brave.com/EeP2x-3fQkebbnqEkCMbhBkG2tUkkzqz7MFg4CD5H1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9rcmlz/aG5hZ3VydWt1bC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDgvZGNhLWRp/cGxvbWEtaW4tY29t/cHV0ZXItYXBwbGlj/YXRpb24tY291cnNl/LmpwZw",
    "https://imgs.search.brave.com/gTsQWHYKv2vEHruPCTznBqFYU72McJierAjlHcGLqKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/YXNzZXRzLmxldmVy/YWdlZWR1LmNvbS9t/ZWRpYS91cGxvYWRz/LzIwMjQvMTIvMDcx/MTI0MTAvVGFsbHkt/Q291cnNlLTEtODAw/eDUwMC5qcGc",
    "https://imgs.search.brave.com/51fGyicSBtBAUe01bUjp5pAlP93kBOZQ3zKY_-QHHbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/YXNzZXRzLmxldmVy/YWdlZWR1LmNvbS9i/bG9nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzEyLzIxMjAw/MDI3L0RUUC1Db3Vy/c2VzLTEtODAweDUw/MC5wbmc",
    "https://imgs.search.brave.com/6chDcEvigxjbeJJDlSLLXaXsaUjOlpOKRS456E_CZPo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhLzUx/LzNkLzVhNTEzZDMz/NjkxZjZhODUxMmEx/OTI0ZjczZjBhYjg1/LmpwZw",
    "https://imgs.search.brave.com/gzGVReMlaYQ8VcEwAQ0LPqlQKAtZCf4oMF2N92z1XTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWhl/c2h0eXBpbmd0dXRv/ci5jb20vaW1nL21h/bmdhbC10eXBpbmct/c2hvcnRjdXQta2V5/LnBuZw",
    "https://imgs.search.brave.com/Md0-zjqRZC5JFYqWQoxtWs-hlkVKGqNgzFKYBjrvFs0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Vy/c2VzLmlpZC5vcmcu/aW4vcHVibGljLy91/cGxvYWRzL21lZGlh/X21hbmFnZXIvNjIx/LmpwZw",
    "https://imgs.search.brave.com/hT6WWYFsRF2mZw0BaKtonh1a2iIM_qc0_qmsRmDek_M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JlYXRpdmVpdGlu/c3RpdHV0ZS5jb20v/aW1hZ2VzL2NvdXJz/ZS9jb3Vyc2VfMTY2/ODQ4ODA2Ni5qcGc",
  ]);
  return (
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
  );
};

export default HeroSection;
