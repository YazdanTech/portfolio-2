
import ShinyText from '../../components/ShinyText'
import BetweenScroll from "../../components/BetweenScroll";
import Bubbles from "../../components/Bubbles"


export default function AboutMe() {
  return (
    <div>
      <div className="relative w-full flex justify-center">

        <div className="absolute z-30 bg-black top-0 right-0 bottom-0 left-0">
        </div>

        <Bubbles />

        <div className="min-h-max w-full relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow) pb-20">

          <div className="text-5xl lg:text-8xl md:text-7xl font-thin my-30 text-center">
            <ShinyText 
              text="About Me"
              disabled={false}
              speed={3}
            />
          </div>

          <div className='flex flex-col gap-5 p-5 lg:flex-row flex-wrap justify-center'>
            <div className="text-left p-5 lg:w-[45%] delay-0 hover:-translate-y-2 z-40 shiny-border">
              <h1 className='text-5xl mb-10 gradient-text'>
                I Am
              </h1>
              <p>
                a full-stack developer focused on building fast, scalable, and visually consistent web applications. My work combines clean engineering with thoughtful interface design, allowing businesses to translate ideas into reliable, production-ready digital products.
              </p>
            </div>
            <div className="text-left p-5 lg:w-[45%] delay-1000 hover:-translate-y-2 z-40 shiny-border">
              <h1 className='text-5xl mb-10 gradient-text'>
                I Specialize
              </h1>
              <p>
                in Python, Django REST Framework, JavaScript, React, and Next.js, delivering solutions that perform under real-world conditions. Whether it is an API, a marketing site, or a complex web platform, I approach every project with attention to detail, efficient architecture, and measurable results.
              </p>
            </div>
            <div className="text-left p-5 lg:w-[45%] delay-1000 hover:-translate-y-2 z-40 shiny-border">
              <h1 className='text-5xl mb-10 gradient-text'>
                Clients Work With Me
              </h1>
              <p>
                because I communicate clearly, understand requirements without hand-holding, and deliver on time. I care about performance, maintainability, and long-term stability—not disposable code or shortcuts.
              </p>
            </div>
            <div className="text-left p-5 lg:w-[45%] delay-1000 hover:-translate-y-2 z-40 shiny-border">
              <h1 className='text-5xl mb-10 gradient-text'>
                If You Need Someone
              </h1>
              <p>
                who can take ownership of a project and turn specifications into a functional, polished product, I am a straightforward choice. I am open to international collaborations and ready to start when you are.
              </p>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <div className="cta-container border h-50 w-50 flex justify-center items-center">
              <div className="cta-container-2 h-50 w-50">
                <p className="cta-content text-2xl">Contact Me Now</p>
              </div>
            </div>
          </div>

        </div>
      </div>

        <BetweenScroll />
        <div className="between-section">
          <h1 className="text-7xl">Taste Digital Luxury With Me..</h1>
        </div>
    
    </div>
  );
}
