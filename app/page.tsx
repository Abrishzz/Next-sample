// Home.js

import React from "react";
import About from "@/components/about";


import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

// import CenteredSearchBar from "@/components/search";
import AboutB from "@/components/aboutb";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-0">
      <div
        style={{
          backgroundImage: `url(/camp.png)`,
          backgroundPosition: "center",
          backgroundColor: "#CCE3FC",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <Intro />

        <div style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: '150px', paddingTop: '100px' }}>
          <SectionDivider />
        </div>
      </div>
      <div className="mt-[-marginSize]"> {/* Replace [marginSize] with the size of the margin you want to remove */}
        <About />
        <AboutB /> 
      </div>
      <div className="mt-[-marginSize]"> {/* Replace [marginSize] with the size of the margin you want to remove */}
       
      </div>
      <div style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: '150px', paddingBottom: '100px' }}>
      <Projects />
      </div>
      
    
    
    </main>
  );
}
