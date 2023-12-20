"use client";

import React from "react";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type SectionHeadingProps = {
  children: React.ReactNode;
  style?: React.CSSProperties; // Add this line
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, style }) => { // Add style here
  return <h2 style={style}>{children}</h2>; // Use style here
};

export default function About() {
  const { ref } = useSectionInView("Services");

  return (
    <motion.section
      ref={ref}
      className="max-w-full h-screen flex items-center justify-center text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      style={{ backgroundColor: '#161925', color: 'white', backgroundSize: 'cover' }}
    >
      <div className="w-1/2">
        <SectionHeading style={{ fontFamily: 'Lexend', fontWeight: 400, fontSize: '28px', lineHeight: '36px' }}>Enjoy quality life with<br /> our housing services.</SectionHeading> {/* Add styles */}
      </div>
      <div className="w-1/2 flex flex-col justify-around"
      >
        <p className="mb-3" style={{ fontFamily: 'Instrument Sans', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' }}>
          Ziccow Real-Estate is the right choice for those of you who are looking for comfortable, safe and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. You can see for yourself how our housing services can offer beautiful and comfortable housing for you and your family.
        </p>


        <p style={{ fontFamily: 'Instrument Sans', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' }}> {/* Add styles */}
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am currently
          learning about{" "}
          <span className="font-medium">history and philosophy</span>. I'm also
          learning how to play the guitar.
        </p>
      </div>
    </motion.section>
  );
}
