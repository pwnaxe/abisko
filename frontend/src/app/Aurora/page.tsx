export default function Aurora() {
    return (
      <>
        <div className="min-h-screen w-screen bg-slate-500 p-4">
          <div className="text-center pt-24">
            <h1 className="bg-blue-500 text-white font-bold uppercase text-sm p-2 mb-4">
              Abisko, Sweden
            </h1>
            <p className="text-gray-700">
              <a href="https://www.lightsoverlapland.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Lights Over Lapland
              </a>{" "}
              is a family-run aurora tour company in Abisko National Park, Sweden. They also have numerous{" "}
              <a href="https://www.lightsoverlapland.com/virtual-aurora-tours/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                virtual aurora tours
              </a>{" "}
              to choose from so you can experience the wonder of the northern lights from the comfort of your own home.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <iframe 
              src="https://player.twitch.tv/?channel=lightsoverlapland&parent=expeditionlapland.com" 
              frameBorder="0" 
              allowFullScreen={true} 
              scrolling="no" 
              height="378" 
              width="620"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
  