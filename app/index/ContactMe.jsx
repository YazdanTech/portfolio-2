// ContactMe.jsx
import ShinyText from '../../components/open source/ShinyText'
import BetweenScroll from "../../components/mine/BetweenScroll";
import Bubbles from "../../components/mine/Bubbles"
import ContactTabs from "../../components/mine/ContactTabs"

export default function ContactMe({ initialMessage = "" }) {
  return (
    <div>
      <div className="relative w-full flex justify-center">
        <div className="absolute z-30 bg-black top-0 right-0 bottom-0 left-0"></div>
        <Bubbles />
        <div className="min-h-max w-full relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow) pb-20">
          <div className="text-5xl lg:text-8xl md:text-7xl font-thin my-30 text-center">
            <ShinyText 
              text="Contact Me"
              disabled={false}
              speed={3}
            />
          </div>

          {/* forward the message down */}
          <ContactTabs initialMessage={initialMessage} />
        </div>
      </div>

      <BetweenScroll />
      <div className="between-section">
        <h1 className="text-7xl">Taste Digital Luxury With Me..</h1>
      </div>
    </div>
  );
}
