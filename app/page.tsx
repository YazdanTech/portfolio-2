import Hero from "./Hero";
import Techs from "./Techs";
import TopNav from "./TopNav";
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
    </div>
  );
}
