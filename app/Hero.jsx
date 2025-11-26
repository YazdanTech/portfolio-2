
'use client'
import ShinyText from '../components/ShinyText';
import LightRays from '../components/LightRays';
import ScrambledText from '../components/ScrambledText';
import BetweenScroll from '../components/BetweenScroll';



export default function Hero() {
  return (
    <div>

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
      <div className="relative w-full flex justify-center">



        {/* CONTENT — scrollable normally */}
        <div className="h-screen border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-[var(--div-shadow)] w-full flex flex-col justify-center text-center">
            
            <div className="text-5xl lg:text-8xl md:text-7xl font-thin mb-10 ">
              <ShinyText 
                text="Yazdan Codes"
                disabled={false}
                speed={6}
              />
            </div>

            <div className="luxury-line"></div>

            <div className=" flex justify-center my-10">
              <ScrambledText
                className="scrambled-text-demo text-2xl font-thin text-gray-500"
                radius={50}
                duration={5}
                speed={1}
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

      <BetweenScroll />
      <div className="between-section">
        <h1 className="text-7xl">I Build Your Dream Website..</h1>
      </div>
    </div>
  );
}
