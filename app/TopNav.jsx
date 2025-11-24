'use client'

import Dock from './components/Dock';
import {
  VscHome,
  VscAccount,
  VscMail,
  VscTools,
  VscSettings,
} from "react-icons/vsc";

const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home') },
  { icon: <VscAccount size={18} />, label: 'About Me', onClick: () => alert('About Me') },
  { icon: <VscMail size={18} />, label: 'Contact Me', onClick: () => alert('Contact Me') },
  { icon: <VscTools size={18} />, label: 'Technologies', onClick: () => alert('Technologies') },
  { icon: <VscSettings size={18} />, label: 'Settings', onClick: () => alert('Settings!') },

];


export default function TopNav() {
  return (
    <div className="z-50 fixed bottom-5 left-1/2 right-1/2">
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
