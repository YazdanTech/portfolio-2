
import MagicBento from '../../components/open source/MagicBento'
import ShinyText from '../../components/open source/ShinyText'
import BetweenScroll from "../../components/mine/BetweenScroll";

export default function Experience() {
  return (
    <div>
      <div className="relative w-full flex justify-center">

        <div className="absolute z-20 backdrop-blur-md top-0 right-0 bottom-0 left-0">
        </div>

        <div className="min-h-max w-full relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow) pb-20">

          <div className="text-5xl lg:text-8xl md:text-7xl font-thin my-30 text-center ">
            <ShinyText 
              text="Expereince"
              disabled={false}
              speed={3}
            />
          </div>

            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="0,104,73"
            />

        </div>
      </div>

        <BetweenScroll />
        <div className="between-section">
          <h1 className="text-7xl">Taste Digital Luxury With Me..</h1>
        </div>
    
    </div>
  );
}
