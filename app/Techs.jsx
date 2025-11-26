import ShinyText from '../components/ShinyText';
import CurvedLoop from '../components/CurvedLoop';
import BetweenScroll from "../components/BetweenScroll";

const techItems = [
  { label: "Next.js", icon: "/techs/next-dot-js-svgrepo-com.svg" },
  { label: "CSS", icon: "/techs/css-3-svgrepo-com.svg" },
  { label: "HTML", icon: "/techs/html-5-svgrepo-com.svg" },
  { label: "JavaScript", icon: "/techs/js-svgrepo-com.svg" },
  { label: "React", icon: "/techs/react-svgrepo-com.svg" },
  { label: "Python", icon: "/techs/python-svgrepo-com.svg" },
  { label: "Django", icon: "/techs/django-icon-svgrepo-com.svg" },
  { label: "DRF", icon: "/techs/api-svgrepo-com.svg" },
  { label: "Git", icon: "/techs/git-svgrepo-com.svg" },
  { label: "TailwindCSS", icon: "/techs/tailwindcss-icon-svgrepo-com.svg" }
];

export default function Techs() {
  return (
    <div className='relative'>
      <div className="absolute z-20 backdrop-blur-md top-0 right-0 bottom-0 left-0">
      </div>

      <div className="h-screen relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow)">
        <div className="text-5xl lg:text-8xl md:text-7xl font-thin mt-20 text-center mb-20">
          <ShinyText 
            text="Technologies"
            disabled={false}
            speed={20}
          />
        </div>

        <CurvedLoop 
          items={techItems}          // ← All tech items with SVGs
          speed={2}                  // rotation speed
          curveAmount={20}          // vertical amplitude of the curve
          direction="left"           // initial direction
          interactive={true}         // draggable / interactive
          className="custom-text-style font-thin" 
        />

      </div>
    
      <BetweenScroll />
      <div className="between-section">
        <h1 className="text-7xl">I Build Your Dream Website..</h1>
      </div>

    </div>
  );
}
