"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; 
import CaraouselButton from "./CaraouselButton";
import { motion } from "framer-motion";

export default function Caraousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [items.length]);

  return (
    <div className="w-full aspect-[8/3] rounded-xl overflow-clip relative">
      <section className="flex flex-col gap-8 absolute right-[4%] top-1/2 -translate-y-1/2 z-10 ">
        {items.map((item, index) => {
          return (
            <CaraouselButton
              key={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </section>
      <section className="absolute z-10 text-white bottom-16 left-[4%] flex flex-col gap-4">
        <h2 className="text-4xl font-bold drop-shadow-[0px_4px_8px_rgba(0,0,0,0.75)]">
          {items[activeIndex].title}
        </h2>
        <p className="text-2xl font-light drop-shadow-[0px_3px_6px_rgba(0,0,0,0.5)]">
          {items[activeIndex].desc}
        </p>
      </section>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={items[activeIndex].image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
          layout="fill"
        />
      </motion.div>
    </div>
  );
}
