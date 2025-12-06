import ShinyText from '../../components/ShinyText';
import CopyButton from "../../components/CopyButton";

export default function Footer() {
  return (
    <div>
      <div className="relative w-full flex justify-center">

        <div className="absolute z-20 bg-black top-0 right-0 bottom-0 left-0">
        </div>

        <div className="min-h-max w-full relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow) pb-20">

          <div className="flex flex-col m-5 pt-10 p-5 border gap-5 shadow-(--shadow-2)">
            <div className="flex flex-col lg:flex-row gap-20 ">
              <div className="text-5xl lg:text-4xl md:text-4xl font-thin text-left lg:w-[32%]">
                <ShinyText 
                  text="Overthinking wastes time. Figure things out by action."
                  disabled={false}
                  speed={3}
                />
              </div>

              <div className="contact-me flex-col lg:flex-1 flex gap-2 lg:w-[32%]">
                <div className="title text-2xl ">
                  <h2>Let's have a conversation to see if I can guide you</h2>
                </div>
                <div className="email lg:flex-row flex-col flex mt-5">
                  <div className="p-2 border-l border-(--theme-2)">
                    <h4>
                      yazdanthedeveloper@gmail.com
                    </h4>
                  </div>
                  <CopyButton />
                </div>
              </div>

              <div className="flex-col gap-2 flex text-left lg:flex-1 lg:w-[32%] justify-start">
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link">
                    <a href="#" className='text-theme'>Home</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link">
                    <a href="#" className='text-theme'>Work Samples</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link">
                    <a href="#" className='text-theme'>Technologies</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link">
                    <a href="#" className='text-theme'>Contact Me</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link">
                    <a href="#" className='text-theme'>About Me</a>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex-col mt-10">
              <div className="social-media">
                <div className="center">
                  <div id="social-test">
                    <ul className="social">
                      <li><i className="fa fa-telegram" aria-hidden="true"></i></li>
                      <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                      <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                      <li><i className="fa fa-github" aria-hidden="true"></i></li>
                    </ul>
                  </div>
              </div>
              </div>
              <div className="copy-right mt-5 text-center">
                <span>© 2025 Targoon. All rights reserved. Designed & developed by Targoon.</span>
              </div>
            </div>
          </div>
        
        </div>

      </div>

    </div>
  );
}
