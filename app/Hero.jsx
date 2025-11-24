
'use client'
import ShinyText from './components/ShinyText';
import LightRays from './components/LightRays';
import ScrambledText from './components/ScrambledText';
import ScrollReveal from './components/ScrollReveal';



export default function Hero() {
  return (
    <div className="relative w-full flex justify-center border-b border-b-[var(--theme)] shadow-[var(--div-shadow)] ">

      {/* BACKGROUND — stays fixed, full screen, behind everything */}
      <div className="fixed inset-0 -z-10">
        <LightRays
          raysOrigin="top"
          raysColor="#339933"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* CONTENT — scrollable normally */}
      <div className="w-full max-w-5xl text-center relative p-3 pt-32 pb-30">
        
        <div className="text-5xl lg:text-8xl md:text-7xl font-thin mb-10 ">
          <ShinyText 
            text="Yazdan Codes"
            disabled={false}
            speed={6}
          />
        </div>

        <div className="luxury-line"></div>

        <div className="text-3xl flex justify-center my-10">
          <ScrambledText
            className="scrambled-text-demo"
            radius={50}
            duration={5}
            speed={0.1}
            scrambleChars={'_!#%;"'}
          >
            Full-Stack Web Developer
          </ScrambledText>
        </div>

        <div className="flex p-5 w-full justify-center gap-5">
          <button className="glowing-btn">
            <span className="glowing-txt">CO<span className="faulty-letter">NTA</span>CT ME</span>
          </button>
          <button className="glowing-btn delay-1000">
            <span className="glowing-txt delay-1000">WORK<span className="faulty-letter"> S</span>AMPLES</span>
          </button>
        </div>

      </div>
    </div>
  );
}
