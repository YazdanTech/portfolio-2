import ShinyText from '../../components/open source/ShinyText';
import CopyButton from "../../components/mine/CopyButton";
import { useOverlay } from '../../components/mine/OverlayProvider';

export default function Footer() {

  const { showOverlay } = useOverlay();

    
  function goToHome() {
    showOverlay({
      text: 'Just my name, and what i do.',
      scrollTo: 'home'
    });
  }

  
  function goToAboutMe() {
    showOverlay({
      text: 'Who am i? i\'ve been asking the same question...',
      scrollTo: 'aboue-me'
    });
  }

  
  function goToContact() {
    showOverlay({
      text: 'Tell me. let me guide you further',
      scrollTo: 'contact'
    });
  }
  
  function goToTechnologies() {
    showOverlay({
      text: 'Tip: hold the image with your finger and move around.',
      scrollTo: 'technologies'
    });
  }

  function goToSamples() {
    showOverlay({
      text: 'This is a fraction of my true potential.',
      scrollTo: 'experience'
    });
  }
  
  return (
    <div>
      <div className="relative w-full flex justify-center">

        <div className="absolute z-20 bg-black top-0 right-0 bottom-0 left-0">
        </div>

        <div className="min-h-max w-full relative z-40 border-t border-t-black shadow-(--chaotic-shadow) pb-20 py-20">

          <div className="flex flex-col m-3 pt-10 p-5 border border-(--theme) gap-5 shadow-(--shadow-2) mb-10">
            <div className="flex flex-col lg:flex-row gap-20 ">
              <div className="text-4xl lg:text-4xl md:text-5xl font-thin text-left lg:w-[32%]">
                <ShinyText 
                  text="Simplicity is the ultimate sophistication."
                  disabled={false}
                  speed={3}
                />
              </div>

              <div className="contact-me flex-col lg:flex-1 flex gap-2 lg:w-[32%]">
                <div className="title text-2xl ">
                  <h2>Send a brief and I’ll return a clear next-step proposal.</h2>
                </div>
                <div className="email lg:flex-row flex-col flex mt-5">
                  <div className="p-2 border-l-4 border-(--theme-2) mb-5">
                    <h4>
                      contact@yazdantech.com
                    </h4>
                  </div>
                  <CopyButton />
                </div>
              </div>

              <div className="flex-col gap-2 flex text-left lg:flex-1 lg:w-[32%] justify-start">
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link cursor-pointer">
                    <a onClick={goToHome} className='text-theme'>Home</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link cursor-pointer">
                    <a onClick={goToSamples} className='text-theme'>Work Samples</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link cursor-pointer">
                    <a onClick={goToTechnologies} className='text-theme'>Technologies</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link cursor-pointer">
                    <a onClick={goToContact} className='text-theme'>Contact Me</a>
                  </div>
                </div>
                <div className="text-xlpl-3 flex justify-start items-center link-container">
                  <div className="bg-(--theme-2) h-3 w-3 square mr-2 blur-xs"></div>
                  <div className="link cursor-pointer">
                    <a onClick={goToAboutMe} className='text-theme'>About Me</a>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex-col mt-10">
              <div className="social-media">
                <div className="center">
                  <div id="social-test">
                    <ul className="social">
                      <li>
                        <a href="https://t.me/yazdantech" target='_blank'>
                          <i className="fa fa-telegram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/yazdantech" target='_blank'>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/yazdantech/" target='_blank'>
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/yazdantech" target='_blank'>
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
              </div>
              <div className="copy-right mt-20 lg:mt-10 text-center text-md opacity-50">
                <span>© 2025 Targoon. All rights reserved. Designed by Yazdan Tech.</span>
              </div>
            </div>
          </div>
        
        </div>

      </div>

    </div>
  );
}
