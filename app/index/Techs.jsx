import ShinyText from '../../components/open source/ShinyText';
import InfiniteMenu from '../../components/open source/InfiniteMenu'
import BetweenScroll from "../../components/mine/BetweenScroll";

const items = [
  {
    image: '/techs/next-dot-js-svgrepo-com.svg',
    link: '#',
    title: 'Next.js',
    description: 'Full-stack React framework with file-based routing and server-side rendering.'
  },
  {
    image: '/techs/css-3-svgrepo-com.svg',
    link: '#',
    title: 'CSS',
    description: 'Styling language enabling responsive layouts, animations, and visual design.'
  },
  {
    image: '/techs/html-5-svgrepo-com.svg',
    link: '#',
    title: 'HTML',
    description: 'Semantic markup structure for accessible, SEO-friendly web pages.'
  },
  {
    image: '/techs/js-svgrepo-com.svg',
    link: '#',
    title: 'JavaScript',
    description: 'Dynamic language for event-driven programming and client-side logic.'
  },
  {
    image: '/techs/react-svgrepo-com.svg',
    link: '#',
    title: 'React',
    description: 'Component-based UI library powered by a virtual DOM and hooks.'
  },
  {
    image: '/techs/python-svgrepo-com.svg',
    link: '#',
    title: 'Python',
    description: 'High-level language suited for clear syntax, scripting, and rapid development.'
  },
  {
    image: '/techs/django-icon-svgrepo-com.svg',
    link: '#',
    title: 'Django',
    description: 'Scalable, secure, and growth-oriented web framework with clean conventions.'
  },
  {
    image: '/techs/api-svgrepo-com.svg',
    link: '#',
    title: 'DRF',
    description: 'REST API framework for Django enabling serialization, auth, and flexible endpoints.'
  },
  {
    image: '/techs/git-svgrepo-com.svg',
    link: '#',
    title: 'Git',
    description: 'Version control system powering collaboration, CI/CD workflows, GitHub and GitLab.'
  },
  {
    image: '/techs/tailwindcss-icon-svgrepo-com.svg',
    link: '#',
    title: 'TailwindCSS',
    description: 'Utility-first CSS framework enabling rapid UI building without leaving markup.'
  }
];

export default function Techs() {
  return (
    <div>
      <div className="relative w-full flex justify-center">

        <div className="absolute z-20 backdrop-blur-md top-0 right-0 bottom-0 left-0">
        </div>

        <div className="min-h-max w-full relative border-b z-40 border-b-(--theme) border-t border-t-(--theme) shadow-(--div-shadow) ">

          <div className="text-5xl lg:text-8xl md:text-7xl font-thin mt-20 text-center mb-20">
            <ShinyText 
              text="Technologies"
              disabled={false}
              speed={3}
            />
          </div>

      <div style={{ height: '600px', position: 'relative' }} id='technologies'>
        <InfiniteMenu items={items} />
      </div>

        </div>
      </div>

        <BetweenScroll />
        <div className="between-section">
          <h1 className="text-7xl">A professional partner, not just a developer</h1>
        </div>
    
    </div>
  );
}
