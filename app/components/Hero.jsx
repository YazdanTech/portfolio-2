
'use client'
import ShinyText from './designs/ShinyText';
import Lightning from './designs/Lightning';
import ElectricBorder from './designs/ElectricBorder';


export default function Hero() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative'}} className='bg-transparent'>
      <Lightning
        hue={300}
        xOffset={0}
        speed={0.2}
        intensity={0.3}
        size={0.8}
      />
      <div className="w-full text-center absolute top-30">
        <div className="text-8xl text-center mb-10 font-normal drop-shadow-[2px_2px_1px_rgba(255,255,255,0.3)]" >
          <ShinyText 
            text="Yazdan Codes" 
            disabled={false} 
            speed={6} 
            className=''
          />
        </div>
        <div className="text-3xl">
          <div className="text-faded">Full-Stack Web Developer</div>
        </div>
        <div className="text-xl">
          <div className="h2">Full-Stack Web Developer - Building Hauntingly Beautiful Websites With Scalable Back-Ends..</div>
        </div>
        <div className="flex gap-5 p-5 mt-5 w-full justify-center bg-transparent">
          <ElectricBorder
            color="white"
            speed={1}
            chaos={0.3}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className='px-5 py-2 cursor-pointer '>
              <p>Book Now</p>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </div>

  );
}