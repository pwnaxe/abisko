"use client"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

export default function AuroraSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const slides = [
    {
      title: "Tytuł tekstu",
      content: [
        "Phasellus vulputate maximus dolor eu porttitor. Duis ullamcorper molestie magna, id mattis lorem eleifend a. Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus. Cras eleifend est ac aliquet cursus. Phasellus nulla dolor, tristique vel fringilla sit amet, dictum sed arcu. Vivamus massa sapien, imperdiet non erat sit amet, vehicula pharetra tortor. Morbi eu metus odio. Integer a nibh non enim lacinia vestibulum. Vivamus in aliquam mi. Curabitur sed urna at quam congue sollicitudin lectus.",
        "Donec blandit sodales augue vitae feugiat. Maecenas vel facilibus augue, nec viverra erat. Curabitur feugiat lorem ac est porttitor egestas. Etiam placerat vestibulum urna, quis rhoncus nunc volutpat sit amet. Vivamus massa sapien, imperdiet non erat sit amet, vehicula pharetra tortor. Suspendisse tortor.",
      ],
    },
    {
      title: "Aurora Prediction",
      content: [
        "Understanding aurora prediction requires knowledge of solar activity and geomagnetic conditions. The Kp index is crucial for determining aurora visibility at different latitudes. Higher Kp values mean auroras can be seen further south from the poles.",
        "Solar wind speed and the interplanetary magnetic field (IMF) also play important roles. When the Bz component of IMF turns negative, it creates favorable conditions for aurora formation and increases the likelihood of spectacular displays.",
      ],
    },
    {
      title: "Best Viewing Locations",
      content: [
        "The best locations for aurora viewing are within the auroral oval, typically between 65-72 degrees magnetic latitude. This includes northern Scandinavia, Iceland, northern Canada, and Alaska. Dark skies away from light pollution are essential.",
        "Timing is also crucial - the best viewing hours are typically between 10 PM and 2 AM local time. Clear weather conditions and minimal moon interference can enhance the viewing experience significantly.",
      ],
    },
  ]

  return (
    <div className="flex justify-center items-center w-full py-12">
      {/* Slider Container with Navigation */}
      <div className="max-w-6xl w-full mx-4 relative">
        {/* Navigation Buttons - cały przycisk poza kartą z marginesem */}
        <button
          onClick={scrollPrev}
          className="absolute -left-14 top-1/2 transform -translate-y-1/2 border-2 border-[#00B7A3] text-[#00B7A3] text-2xl rounded-full shadow-md flex items-center justify-center w-12 h-12 bg-white hover:bg-[#00B7A3] hover:text-white transition z-10"
        >
          ←
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-14 top-1/2 transform -translate-y-1/2 border-2 border-[#00B7A3] text-[#00B7A3] text-2xl rounded-full shadow-md flex items-center justify-center w-12 h-12 bg-white hover:bg-[#00B7A3] hover:text-white transition z-10"
        >
          →
        </button>

        <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-none w-full">
                <div className="bg-black text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[400px] relative">
                  {/* Dots Indicator - wewnątrz karty, lewy dolny róg */}
                  <div className="absolute bottom-6 left-6 flex space-x-2 z-10">
                    {slides.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          dotIndex === selectedIndex ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => emblaApi?.scrollTo(dotIndex)}
                      />
                    ))}
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-6 text-white">{slide.title}</h2>
                    {slide.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-sm leading-relaxed text-gray-200 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Image Content */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
                    <div className="relative w-full h-[300px] lg:h-[400px]">
                      <Image src="/img/slider_image.png" alt="Aurora prediction map" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
