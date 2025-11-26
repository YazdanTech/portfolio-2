import Hero from "./Hero";
import Techs from "./Techs";
import TopNav from "./TopNav"

export default function Home() {
  return (
    <div className="flex flex-col">
      <TopNav />
      <Hero />
      <Techs />
    </div>
  );
}
