
'use client'
import ShinyText from '../../components/open source/ShinyText';
import { useOverlay } from '../../components/mine/OverlayProvider';
import ScrambledText from '../../components/open source/ScrambledText';
import BetweenScroll from '../../components/mine/BetweenScroll';
import Bubbles from "../../components/mine/Bubbles"

export default function Hero() {

  const { showOverlay } = useOverlay();

  function goToContact() {
    showOverlay({
      text: 'Let’s talk about your project.',
      scrollTo: 'contact'
    });
  }

  function goToExperience() {
    showOverlay({
      text: 'Some of the projects i\'ve chosen to show.',
      scrollTo: 'experience'
    });
  }


  return (
    <div>
      <div className="relative w-full flex justify-center" id='home'>

        <div className="absolute z-20 backdrop-blur-md top-0 right-0 bottom-0 left-0">
        </div>
        
        <div className="md:display-block display-none">
          <Bubbles />
        </div>

        {/* CONTENT — scrollable normally */}
        <div className="h-screen border-b z-40 border-b-(--theme) shadow-(--bottom-div-shadow-1) w-full flex flex-col justify-center text-center">
            
            <div className="text-5xl lg:text-8xl md:text-7xl font-thin mb-3 ">
              <ShinyText 
                text="Yazdan Codes"
                disabled={false}
                speed={3}
              />
            </div>


            <div className=" flex justify-center">
              <ScrambledText
                className="scrambled-text-demo text-xl my-8 text-gray-500"
                radius={50}
                duration={5}
                speed={1}
                scrambleChars={'_!#%;"'}
              >
                Full-Stack Web Developer
              </ScrambledText>
            </div>

            <div className="luxury-line"></div>

            <div className="text-center mt-5">
              <h3 className='gradient-text text-2xl font-light mx-10'>Your vision, engineered for the modern web.</h3>
            </div>

            <div className="flex p-5 w-full justify-center gap-5 gap-y-15 mt-10 flex-wrap">
              <button className="glowing-btn" onClick={goToContact}>
                <span className="glowing-txt">CO<span className="faulty-letter">NTA</span>CT ME</span>
              </button>
              <button className="glowing-btn glowing-btn" onClick={goToExperience}>
                <span className="glowing-txt glowing-txt">WORK<span className="faulty-letter"> S</span>AMPLES</span>
              </button>
            </div>

        </div>
      </div>

      <BetweenScroll />
      <div className="between-section">
        <h1 className="text-7xl">Your vision, executed with intention.</h1>
      </div>
    </div>
  );
}
