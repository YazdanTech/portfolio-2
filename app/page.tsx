// page.jsx
'use client';

import { useState } from "react";
import Hero from "./index/Hero";
import Techs from "./index/Techs";
import TopNav from "./index/TopNav";
import Experience from "./index/Experience";
import AboutMe from "./index/AboutMe";
import Footer from "./index/Footer";
import ContactMe from "./index/ContactMe";
import Services from "./index/Services";

import LightRays from '../components/open source/LightRays';

export default function Home() {
  const [contactMessage, setContactMessage] = useState("");

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="fixed top-0 bottom-0 left-0 right-0 z-35">
        <LightRays
          raysOrigin="top"
          raysColor='#636c77'
          raysSpeed={0.5}
          lightSpread={20}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0}
        />
      </div>

      <TopNav />
      <Hero />
      <Techs />
      <Experience />
      <AboutMe />
      {/* Pass setter so Services can set the contact message */}
      <Services setContactMessage={setContactMessage} />
      {/* Pass the current message down to ContactMe */}
      <ContactMe initialMessage={contactMessage} />
      <Footer />
    </div>
  );
}
