import About from "@/components/about";
import AboutB from "@/components/aboutb";

import Intro from "@/components/intro";

import SectionDivider from "@/components/section-divider";

 // replace with the actual path to your image


 export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div style={{
        backgroundImage: `url(/camp.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}>
        <Intro />
        <SectionDivider />
      </div>
      <About />
      <AboutB />
     
    </main>
  );
}

