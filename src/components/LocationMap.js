import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'

const LocationMap = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 mt-6  font-extralight font-sans ">
          Google Map
        </h2>
        <Link
          className="lg:text-xl underline text-blue-600 "
          href="https://maps.app.goo.gl/R2kqbfrLd7uZMLNU8"
          target="_blank"
        >
          Google map links
        </Link>
       <motion.div
       initial={{opacity:0, y:20}}
       whileInView={{opacity:1, y:0}}
       viewport={{once: true, amount:0.8}}
       transition={{duration:0.8, ease:'easeIn'}}
       >
       <iframe
          className="border w-full h-[75vh]  mt-5 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d764.0138117340995!2d85.24625726952608!3d23.404667229443813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI0JzE2LjgiTiA4NcKwMTQnNDguOCJF!5e1!3m2!1sen!2sin!4v1745292743174!5m2!1sen!2sin"
          
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
       </motion.div>
      </div>
    </div>
  );
};

export default LocationMap;
