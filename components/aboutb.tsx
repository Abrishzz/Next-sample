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
            style={{ backgroundColor: '#F3EFF5', color: 'black' }} // Change backgroundColor to '#F3EFF5' and color to 'black'
        >
 <div className="w-1/2 flex flex-col">
  <h2 style={{ fontFamily: 'Instrument Sans', fontWeight: 400, fontSize: '22px', lineHeight: '28px', color: '#4784C4' }}>What makes us different?</h2>
  <p style={{ fontFamily: 'Lexend', fontWeight: 400, fontSize: '45px', lineHeight: '52px' }}>
  <span style={{ color: 'black' }}>We assist buyers</span>
  <span style={{ color: '#161925' }}> in finding their dream homes.</span>
</p>

  <p style={{ fontFamily: 'Instrument Sans', fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.15px' }}>Our agents will guide you through the entire buying process, from property.</p>
</div>




            <div className="w-1/2" style={{ backgroundImage: `url(/am.png)`, backgroundPosition: 'center', backgroundSize: 'cover', width: '50vw',
        height: '50vh' }}> {/* Add backgroundImage */}
                {/* Image will be displayed here */}
            </div>
        </motion.section>
    );
}
