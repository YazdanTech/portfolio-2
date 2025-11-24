import CurvedLoop from './components/CurvedLoop';


export default function techs () {
  return (
    <div className="">

      <CurvedLoop marqueeText="Welcome to React Bits ✦" />

      <CurvedLoop 
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      <CurvedLoop 
        marqueeText="Smooth Curved Animation"
        speed={1}
        curveAmount={300}
        interactive={false}
      />
    </div>
  )
}