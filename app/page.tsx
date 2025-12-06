import Hero from "./index/Hero";
import Techs from "./index/Techs";
import TopNav from "./index/TopNav";
import Experience from "./index/Experience";
import AboutMe from "./index/AboutMe";
import Footer from "./index/Footer";
import ContactMe from "./index/ContactMe";

import LightRays from '../components/LightRays';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* BACKGROUND — stays fixed, full screen, behind everything */}

      <div className="fixed inset-0 z-30 w-full">
        <LightRays
          raysOrigin="top"
          raysColor="var(--theme)"
          raysSpeed={0.5}
          lightSpread={5}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      
      <TopNav />
      <Hero />
      <Techs />
      <Experience />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}
