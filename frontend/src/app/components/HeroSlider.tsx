import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

function HeroSlider() {
  return (
    <div className='w-full h-screen relative text-white'>
      <Carousel className='h-full'>
        <CarouselContent>
          <CarouselItem>
            <div className='h-screen flex items-center justify-center relative'>
              <Image
                src='/img/hero.png'
                fill
                alt='Abisko'
                sizes='100%'
                quality={80}
                className='-z-10 h-full'
              />
              <div className='absolute inset-0 bg-black opacity-30 z-0'></div>
              <div className='z-10'>
                <h2 className='text-lg font-bold text-center uppercase opacity-60 tracking-widest'>
                  Twoja podróż zaczyna się tutaj
                </h2>
                <h1 className='text-7xl text-center font-lora leading-tight'>
                  Wyrusz w podróż <br />i odkryj magię Laponii
                </h1>
                <div className='flex justify-center mt-7 gap-4'>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Odkryj Laponię
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Przygotuj się do wyjazdu
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Znajdź atrakcje
                  </button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='h-screen flex items-center justify-center relative'>
              <Image
                src='/img/blog-samp.jpg'
                fill
                alt='Abisko'
                sizes='100%'
                loading='lazy'
                quality={80}
                className='-z-10 h-full w-auto object-cover'
              />
              <div className='absolute inset-0 bg-black opacity-30'></div>
              <div className=''>
                <h2 className='text-lg font-bold text-center uppercase opacity-60 tracking-widest'>
                  Twoja podróż zaczyna się tutaj
                </h2>
                <h1 className='text-7xl text-center font-lora leading-tight'>
                  Wyrusz w podróż <br />i odkryj magię Laponii
                </h1>
                <div className='flex justify-center mt-7 gap-4'>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Odkryj Laponię
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Przygotuj się do wyjazdu
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Znajdź atrakcje
                  </button>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='h-screen flex items-center justify-center relative'>
              <Image
                src='/img/hero.png'
                fill
                alt='Abisko'
                loading='lazy'
                sizes='100%'
                quality={80}
                className='-z-10 h-full'
              />
              <div className='absolute inset-0 bg-black opacity-30 z-0'></div>
              <div className='z-10'>
                <h2 className='text-lg font-bold text-center uppercase opacity-60 tracking-widest'>
                  Twoja podróż zaczyna się tutaj
                </h2>
                <h1 className='text-7xl text-center font-lora leading-tight'>
                  Wyrusz w podróż <br />i odkryj magię Laponii
                </h1>
                <div className='flex justify-center mt-7 gap-4'>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Odkryj Laponię
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Przygotuj się do wyjazdu
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-5 py-3'>
                    Znajdź atrakcje
                  </button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute z-50 top-1/2 -translate-y-1/2 left-8 bg-transparent text-white h-12 w-12' />
        <CarouselNext className='absolute z-50 top-1/2 -translate-y-1/2 right-8 bg-transparent text-white h-12 w-12' />
      </Carousel>
    </div>
  );
}

export default HeroSlider;
