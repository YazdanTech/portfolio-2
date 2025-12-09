// components/ServiceList.jsx

export default function ServiceList({ services, onRequestService, onShowExample }) {
  if (!Array.isArray(services) || services.length === 0) return null;

  return (
    <div className="flex gap-8 flex-wrap p-5 bg-transparent">
      {services.map((item, index) => (
        <div className="z-100 service box-border flex flex-col border border-(--theme) p-5 lg:w-[31%] shadow-(--shadow-2) hover:shadow-(--shadow-div-hover) " key={index}>
          <h2 className="text-2xl mb-10">{item.title}</h2>
          <h4 className="text-xl mb-2 mt-5">Description:</h4>
          <p className="pl-5 font-thin">{item.description}</p>

          <h4 className="text-xl mb-2 mt-5">Deliverables:</h4>
          <div className="pl-5 font-thin">
            {item.deliverables.map((d, i) => (
              <div key={i} className="flex items-center">
                <div className="rotating-square"></div>
                <div className="ml-2">{d}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-5 justify-center my-10">
            <button className="shiny-cta-slow shiny-cta" type="button" onClick={() => onShowExample(item.exampleId)}>
              Example
            </button>

            <button className="shiny-cta shiny-cta-slow shiny-cta-2" type="button" onClick={() => onRequestService(item.prefillMessage)}>
              Book Now
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
