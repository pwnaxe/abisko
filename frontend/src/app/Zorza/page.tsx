"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";

export default function BannerSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
      <div className='pt-0'>
        {/* Banner */}
        <div className='relative w-full h-[500px] flex items-center justify-center bg-cover bg-center' 
             style={{ backgroundImage: "url('/img/zorza_top.png')" }}>
          {/* Nakładka dla lepszej czytelności */}
          <div className='absolute inset-0 bg-black/40'></div>
          {/* Tekst */}
          <div className='relative text-center text-white flex flex-col items-center justify-center h-full'>
            <p className='text-aquamarine-400 text-sm tracking-wide uppercase'>Subtitle</p>
            <h1 className='text-4xl font-semibold mt-2'>Kiedy zobaczę Zorzę Polarną?</h1>
          </div>
        </div>
        
        {/* Sekcja tekstowa */}
        <div className='w-[747px] h-[370px] mx-auto mt-12 py-12 flex items-center'>
          <p className='text-gray-800 leading-relaxed text-lg text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis augue. Ut et ligula non lectus ornare laoreet vitae id neque. Fusce ac rutrum risus. Quisque mi mauris, consectetur a semper non, feugiat quis velit.
            Ut maximus nisi id tristique lobortis. Curabitur dui velit, ornare a tellus eu, elementum congue nisl. Vestibulum a orci sed risus tristique porta non sit amet risus. Suspendisse viverra turpis gravida lectus dapibus pulvinar.
            Fusce a lectus ut lectus aliquet rutrum. Aenean eu risus eget ante bibendum lacinia et vitae massa. Vestibulum eget enim quam. In eu elementum tellus. Sed lacinia arcu id nisl luctus pretium. Curabitur rutrum, est eu accumsan tempus, augue diam condimentum ipsum, eget euismod tortor ipsum bibendum nulla.
            Donec commodo dapibus quam et consectetur. Donec id elit id metus ornare malesuada a facilisis erat. Fusce vitae lorem quis dui consequat gravida in non orci. Praesent at molestie nulla, ac viverra orci. Mauris rutrum, dui id congue fermentum, quam felis viverra ligula, blandit ligula quis mauris.
            Vestibulum nec risus sapien. Quisque vel faucibus eros. Quisque a leo sit amet tortor porta blandit. Praesent ut velit in risus malesuada viverra.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative flex justify-center items-center w-full py-12">
          {/* Slider Container */}
          <div className="max-w-5xl w-full bg-black text-white rounded-2xl overflow-hidden flex relative" ref={emblaRef}>
            <div className="flex">
              <div className="flex flex-none w-full md:w-1/2 p-8 flex-col justify-center">
                <h2 className="text-xl font-semibold mb-4">Tytuł tekstu</h2>
                <p className="text-sm leading-relaxed">
                  Phasellus vulputate maximus dolor eu porttitor. Duis ullamcorper molestie magna, id mattis lorem
                  eleifend a. Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed
                  sed tellus. Cras eleifend est ac aliquet cursus. Vivamus massa sapien, imperdiet non erat sit amet,
                  vehicula pharetra tortor.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Donec blandit sodales augue vitae feugiat. Maecenas vel facilisis augue, nec viverra erat. Curabitur
                  feugiat lorem ac est porttitor egestas. Suspendisse tortor.
                </p>
              </div>

              <div className="flex flex-none w-full md:w-1/2">
                <Image src="/img/slider_image.png" alt="Slider Image" width={500} height={400} className="rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 lg:left-80 top-1/2 transform -translate-y-1/2 border-2 border-aquamarine-400 text-aquamarine-400 text-2xl p-4 rounded-full shadow-md flex items-center justify-center w-12 h-12 bg-white"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 lg:right-80 top-1/2 transform -translate-y-1/2 border-2 border-aquamarine-400 text-aquamarine-400 text-2xl p-4 rounded-full shadow-md flex items-center justify-center w-12 h-12 bg-white"
          >
            →
          </button>
        </div>
        <div className='w-[747px] h-auto mx-auto mt-12 py-12'>
  <h2 className='text-2xl font-bold text-gray-900 mb-4'>Jak sprawdzić czy będzie zorza?</h2>
  
  <p className='text-gray-800 leading-relaxed text-lg mb-4'>
    If you're dreaming of witnessing the aurora borealis (northern lights) or aurora australis (southern lights), using 
    aurora prediction tools can greatly increase your chances. These tools help you predict when and where auroras 
    might appear by analyzing solar activity and geomagnetic conditions. Here’s a step-by-step guide on how to effectively use them:
  </p>

  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Understand the Key Terminology</h3>

  <p className='text-gray-800 leading-relaxed text-lg mb-4'>
    Before diving into aurora prediction tools, it helps to understand a few key terms that are commonly used:
  </p>

  <ul className='list-disc list-inside text-gray-800 leading-relaxed text-lg space-y-2'>
    <li><strong>Kp Index:</strong> This is a geomagnetic activity scale ranging from 0 to 9. The higher the Kp index, the more likely it is that an aurora will be visible. For those living at lower latitudes (further from the poles), you will typically need a Kp index of 6 or above to see the aurora.</li>
    <li><strong>Solar Wind Speed:</strong> A higher solar wind speed (measured in km/s) usually increases the likelihood of an aurora.</li>
    <li><strong>IMF (Interplanetary Magnetic Field):</strong> The IMF affects whether the solar wind interacts strongly with Earth's magnetic field. The <strong>Bz</strong> component of the IMF is important — when the Bz is negative, it allows more solar particles to interact with Earth's atmosphere, increasing the chances of auroras.</li>
    <li>Check the Kp Index and Geomagnetic Conditions.</li>
    <li>Start by checking the Kp index forecast. As mentioned earlier, a Kp index of 5 or higher typically means auroras will be visible closer to the poles, while a Kp index of 6–7 might mean people further south have a chance to see the lights.</li>
    <li>Also, look at the solar wind speed and the Bz component of the IMF:
      <ul className='list-disc list-inside ml-6'>
        <li>Solar wind speeds above 500 km/s are ideal.</li>
        <li>If the Bz is negative (especially -5 nT or lower), auroras are more likely.</li>
      </ul>
    </li>
  </ul>
</div>
<div className='w-full bg-[#00284D] py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center text-white'>
          {/* Tekst w dwóch linijkach, zmniejszony akapit */}
          <p className='text-xl text-center md:text-left mb-6 md:mb-0 max-w-[600px] leading-relaxed md:mr-4'>
            If you are stuck at home or do not want to freeze too much,<br />
            check available cameras next to your location like Kiruna IRF.
          </p>
          
          {/* Przycisk dalej od tekstu */}
          <div className='ml-12'>
            <a href='#' className='bg-[#008F8C] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#007775] transition'>
              Zobacz
            </a>
          </div>
        </div>
        {/* Sekcja tekstowa */}
        <div className='w-[747px] h-auto mx-auto mt-12 py-12'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>For your convenience - choose an Aurora Prediction Tool</h2>
          
          <p className='text-gray-800 leading-relaxed text-lg mb-4'>
            There are several websites and mobile apps that track solar activity and predict auroras. Some popular tools include:
          </p>

          <ul className='list-disc list-inside text-gray-800 leading-relaxed text-lg space-y-2'>
            <li><strong>NOAA Space Weather Prediction Center:</strong> This site offers 30-minute to 3-day aurora forecasts, showing the Kp index, solar wind speed, and geomagnetic conditions. It also provides real-time aurora oval maps.</li>
            <li><strong>Aurora Forecast by SoftServe:</strong> This mobile app provides forecasts for auroras based on your location and includes alerts when conditions are favorable for aurora viewing.</li>
            <li><strong>SpaceWeatherLive:</strong> This site offers detailed information on solar storms, solar wind, and aurora activity. It’s useful for checking real-time solar data.</li>
            <li><strong>Aurorasaurus:</strong> This crowd-sourced tool collects real-time aurora sighting reports from users and provides maps showing where auroras are currently visible.</li>
          </ul>

          <p className='text-gray-800 leading-relaxed text-lg mb-4'>
            Many aurora prediction apps allow you to set alerts that notify you when the aurora might be visible based on your location and the current solar conditions. Setting these alerts ensures you won’t miss the moment if an aurora appears near you.
          </p>
        
          {/* Obrazek - szerokość dopasowana do tekstu */}
          <div className='w-full mt-6'>
            <img 
              src='/img/conc_finland_bot.png' 
              alt='Aurora Finland' 
              className='w-full h-auto'
            />
          </div>
        </div>
        <div className="w-full flex justify-center gap-6 flex-wrap mt-12 mb-12">
  {/* Pierwszy panel - Poradnik */}
  <div className='w-[343px] h-[400px] relative rounded-3xl overflow-hidden shadow-lg'>
    <img 
      src='/img/zorza_poradnik.png' 
      alt='Tytuł poradnika/bloga' 
      className='w-full h-full object-cover'
    />
    <div className='absolute top-[50%] left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end text-white text-left'>
      <h3 className='text-xl font-bold'>Tytuł poradnika/bloga</h3>
      <p className='text-sm leading-relaxed'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur, interdum mauris et, laoreet leo. Praesent cursus odio et sagittis pretium.
      </p>
      <button className='mt-4 w-[50%] px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition'>
        Odkryj więcej
      </button>
    </div>
  </div>

  {/* Drugi panel - Fjords */}
  <div className='w-[343px] h-[400px] relative rounded-3xl overflow-hidden shadow-lg bg-white'>
    <div className='h-1/2 w-full relative'>
      <img 
        src='/img/zorza_fjords.png' 
        alt='Fjords Sightseeing' 
        className='w-full h-full object-cover rounded-t-3xl'
      />

      {/* Nowość */}
      <div className='absolute top-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-[2px] rounded-full backdrop-blur-md flex items-center h-6'>
        Nowość
      </div>

      {/* Ocena */}
      <div className='absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold px-2 py-[2px] rounded-full flex items-center h-6'>
        <img src='/img/Star1.png' alt='Ocena' className='w-4 h-4 mr-1' />
        <span className='leading-none'>4.9</span>
      </div>
    </div>

    {/* Dolna część */}
    <div className='h-1/2 w-full p-4 flex flex-col justify-between'>
      <h3 className='text-[1.25rem] font-bold text-gray-900 leading-snug'>
        Fjords Sightseeing and Photography Tour (Autumn/Winter)
      </h3>

      <div className='flex items-center text-gray-600 text-sm mt-2'>
        <span className='flex items-center mr-4'>
          <img src='/img/loc_icon.png' alt='Lokalizacja' className='w-5 h-5 mr-1' />
          Lokalizacja
        </span>
        <span className='flex items-center'>
          <img src='/img/time_icon.png' alt='Czas' className='w-5 h-5 mr-1' />
          4 godziny
        </span>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <span className='text-[#00B7A3] text-xl font-bold'>1000 zł</span>
        <button className='px-4 py-2 bg-[#00B7A3] text-white rounded-full text-sm hover:bg-[#009F8E] transition'>
          Odkryj więcej
        </button>
      </div>
    </div>
  </div>

  {/* Trzeci panel - Ice Fishing */}
  <div className='w-[343px] h-[400px] relative rounded-3xl overflow-hidden shadow-lg bg-white'>
    <div className='h-1/2 w-full relative'>
      <img 
        src='/img/concierge_top_banner.png' 
        alt='Ice Fishing' 
        className='w-full h-full object-cover rounded-t-3xl'
      />

      {/* Ocena */}
      <div className='absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold px-2 py-[2px] rounded-full flex items-center h-6'>
        <img src='/img/Star1.png' alt='Ocena' className='w-4 h-4 mr-1' />
        <span className='leading-none'>4.6</span>
      </div>
    </div>

    {/* Dolna część */}
    <div className='h-1/2 w-full p-4 flex flex-col justify-between'>
      <h3 className='text-[1.25rem] font-bold text-gray-900 leading-snug'>
        Ice Fishing
      </h3>

      <p className='text-gray-700 text-sm leading-relaxed'>
        Embark on a mesmerizing journey with one of Lights Over Lapland’s expert aurora.
        One of Lights Over Lapland’s expert aurora.
      </p>

      <div className='flex items-center text-gray-600 text-sm mt-2'>
        <span className='flex items-center mr-4'>
          <img src='/img/loc_icon.png' alt='Lokalizacja' className='w-5 h-5 mr-1' />
          Lokalizacja
        </span>
        <span className='flex items-center'>
          <img src='/img/time_icon.png' alt='Czas' className='w-5 h-5 mr-1' />
          4 godziny
        </span>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <span className='text-[#00B7A3] text-xl font-bold'>1000 zł</span>
        <button className='px-4 py-2 bg-[#00B7A3] text-white rounded-full text-sm hover:bg-[#009F8E] transition'>
          Odkryj więcej
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}