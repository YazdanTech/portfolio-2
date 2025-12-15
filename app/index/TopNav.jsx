'use client'

import { useOverlay } from '../../components/mine/OverlayProvider';
import Dock from '../../components/open source/Dock';
import {
  VscHome,
  VscAccount,
  VscMail,
  VscTools,
  VscSettings,
} from "react-icons/vsc";


export default function TopNav() {
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
      text: 'Tip: hold the image with your finger and move around',
      scrollTo: 'technologies'
    });
  }

  
const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: goToHome},
  { icon: <VscAccount size={18} />, label: 'About Me', onClick: goToAboutMe},
  { icon: <VscMail size={18} />, label: 'Contact Me', onClick: goToContact},
  { icon: <VscTools size={18} />, label: 'Technologies', onClick: goToTechnologies},
  // { icon: <VscSettings size={18} />, label: 'Settings', onClick: () => alert('Settings!') },

];


  
  return (
    <div className="z-10000 fixed bottom-5 left-1/2 right-1/2">
      <Dock 
        items={items}
        className='backdrop-blur-2xl'
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  )
}
