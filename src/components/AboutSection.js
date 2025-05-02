import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Sliders from "@/components/Sliders";
import {motion} from 'framer-motion'

export default function About() {
  const [coreFocus, setCoreFocus] = useState([
    {
      title: "Skill Development",
      des: "The primary goal is to impart practical computer skills, ranging from basic operations to advanced technical knowledge.",
    },
    {
      title: "Hands-on Learning",
      des: "Coaching            often emphasizes practical application through hands-on exercises and real-world scenarios.",
    },
    {
      title: "Personalized Guidance",
      des: "Good            coaching centers often provide individualized attention and cater to different learning paces and styles.",
    },
    {
      title: "Career Readiness",
      des: "Many programs            are designed to equip students with skills that are in demand in the job market.",
    },
  ]);
  const [commonOffering, setCommonOffering] = useState([
    {
      title: "Basic Computer Literacy  ",
      des: " Covering fundamental concepts, operating systems (like Windows), internet usage, and basic software applications.",
    },
    {
      title: "Office Productivity Software  ",
      des: " Training in Microsoft Office Suite (Word, Excel, PowerPoint, Access)      or similar open-source alternatives, which are crucial for many jobs.",
    },
    {
      title: "Financial Accounting Software (Tally) ",
      des: "Given the business landscape in India, Tally training is often a            popular and essential course.",
    },
    {
      title: "Desktop Publishing (DTP)",
      des: "Skills in design software for creating print and digital materials.",
    },
    {
      title: "Graphic Design (Photoshop, CorelDRAW, Canva)",
      des: "Training in visual communication and image manipulation.",
    },
    {
      title: "Web Design and Development",
      des: " Courses covering HTML, CSS, JavaScript, and potentially content            management systems.",
    },
    {
      title: " Programming Languages (C, C++, Python, Java)",
      des: "For those interested in software development.",
    },
    {
      title: "Data Entry and Typing Skills",
      des: "Foundational skills required for many administrative roles.",
    },
    {
      title: " Digital Marketing",
      des: "Training in online marketing strategies and            tools.",
    },
    {
      title: " Hardware and Networking Basics",
      des: " Understanding computer hardware and            network fundamentals.",
    },
  ]);
  const [benefits, setBenefits] = useState([
    {
      title: "Improved Employability",
      des: "In today's job market, computer skills are often a prerequisite. Coaching can significantly enhance career prospects.",
    },
    {
      title: "Enhanced Productivity",
      des: " Proficiency in computer applications can lead to greater efficiency in various tasks.",
    },
    {
      title: "Increased Confidence",
      des: "Mastering new skills builds self-assurance in a digital environment.",
    },
    {
      title: "Access to Information and Resources",
      des: "Computer literacy opens doors  to a vast amount of online information and learning resources.",
    },
    {
      title: "Adaptability to Technological Advancements",
      des: " Coaching can help  individuals stay current with rapidly evolving technology.",
    },
    {
      title: "Problem-Solving Skills",
      des: "Learning how computers work and how to use  software can improve logical thinking and problem-solving abilities.",
    },
  ]);
  const [sliderPics, setSliderPics] = useState([
    "a-1.jpg",
    "a-2.jpg",
    "a-3.jpg",
    "a-4.jpg",
    "a-5.jpg",
  ]);
  return (
    <div>
      <div className="">
        <Sliders pics={sliderPics} />
        <div className="py-5">
          <div className="lg:flex items-center gap-5">
            <motion.div
            initial={{opacity:0, scale:0}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true, amount:0.8}}
            transition={{duration:0.8, ease:'easeIn'}}
            className="lg:w-1/2">
              <h2 className="text-3xl text-orange-500 font-sans text-center lg:text-left uppercase font-[MachinaR]">
                About Drishti Infotech
              </h2>
              <p className="my-2 text-xl text-center lg:text-left">
                <span className="font-medium">Drishti Infotech</span> is a
                trusted name in education. Our goal is to make learning easy and
                available for everyone. We are well-known in the city for
                helping students grow through computer training and useful
                vocational courses. Many of our students have gone on to build
                successful careers, and we are proud to be part of their
                journey.
              </p>
              <p className="my-2 text-xl text-center lg:text-left">
                At Drishti Infotech, we believe in shaping young minds,
                spreading knowledge, and helping build a digitally smart India.
              </p>
            </motion.div>
            <div className="lg:w-1/2">
              <motion.img
              initial={{opacity:0, scale:0}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true, amount:0.8}}
              transition={{duration:0.8, ease:'easeIn'}}
                className="w-full rounded"
                src="banner.webp"
                alt="about banner"
              />
            </div>
          </div>
          <h2 className="mb-5 mt-10 text-2xl font-medium">Core Focus</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
            {coreFocus.map((e, i) => {
              return (
                <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true, amount:0.8}}
                transition={{duration:0.8, ease:'easeIn'}}
                key={i}>
                  <Card
                  
                  className="hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200"
                >
                  <CardHeader>
                    <CardTitle>{e.title}</CardTitle>
                    <CardDescription>{e.des}</CardDescription>
                  </CardHeader>
                </Card>
                </motion.div>
              );
            })}
          </div>

          <h2 className="mt-10 mb-5 text-2xl font-medium">
            Common Offerings (relevant to Ranchi, Jharkhand)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {commonOffering.map((e, i) => {
              return (
               <motion.div
               initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true, amount:0.8}}
                transition={{duration:0.8, ease:'easeIn'}}
               key={i}
               >
                 <Card
                 
                  className="hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200"
                >
                  <CardHeader>
                    <CardTitle>{e.title}</CardTitle>
                    <CardDescription>{e.des}</CardDescription>
                  </CardHeader>
                </Card>
               </motion.div>
              );
            })}
          </div>

          <h5 className="mt-10 mb-5 text-2xl font-medium">
            Benefits of Computer Coaching
          </h5>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {benefits.map((e, i) => {
              return (
               <motion.div
               initial={{opacity:0, y:20}}
               whileInView={{opacity:1, y:0}}
               viewport={{once:true, amount:0.8}}
               transition={{duration:0.8, ease:'easeIn'}}
               key={i}
               >
                 <Card
                  
                  className="hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200"
                >
                  <CardHeader>
                    <CardTitle>{e.title}</CardTitle>
                    <CardDescription>{e.des}</CardDescription>
                  </CardHeader>
                </Card>
               </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
