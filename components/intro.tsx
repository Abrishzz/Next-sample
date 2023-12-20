"use client";


import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      // style={{ backgroundImage: `url(/camp.png)` }} 
      >
    
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            /> */}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            
          </motion.span>
        </div>
      </div>

      <motion.h1
  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
<span className="font-bold text-4xl" style={{ fontFamily: 'Lexend', fontWeight: 400, fontSize: '57px' }}>
  Find a home <br />  that suits you .
</span>

  <div className="text-lg font-normal">
    Want to find a suitable home? <br /> We are ready to help you <br /> find one that suits your lifestyle and needs.
  </div>
</motion.h1>



<motion.div
  className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.1,
  }}
>
  <Link
    href="#experience"
    className="group text-black px-7 py-3 flex flex-col items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
    onClick={() => {
      setActiveSection("Services");
      setTimeOfLastClick(Date.now());
    }}
  >
    <span className="font-bold text-2xl">12 Years +</span>
    <span>Experience</span>
  </Link>

  <Link
    href="#experience"
    className="group text-black px-7 py-3 flex flex-col items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
    onClick={() => {
      setActiveSection("Services");
      setTimeOfLastClick(Date.now());
    }}
  >
    <span className="font-bold text-2xl">1200 +</span>
    <span>Listed Properties</span>
  </Link>

  <Link
    href="#experience"
    className="group text-black px-7 py-3 flex flex-col items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
    onClick={() => {
      setActiveSection("Services");
      setTimeOfLastClick(Date.now());
    }}
  >
    <span className="font-bold text-2xl">220 +</span>
    <span>Happy Customers</span>
  </Link>

 
</motion.div>

    </section>
  );
}
