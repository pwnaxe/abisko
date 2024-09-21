import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import SmallBlogCard from './SmallBlogCard';
import { MdFamilyRestroom } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';
import { GiForestCamp } from 'react-icons/gi';
import { RiMapPin2Line } from 'react-icons/ri';

function HeroSlider() {
  return (
    <div className='w-full h-screen relative text-white'>
      <Carousel className='h-full'>
        <CarouselContent className='space-x-0'>
          <CarouselItem className='w-full m-0 p-0'>
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
          <CarouselItem className='w-full m-0 p-0'>
            <div className='h-screen flex items-center justify-start relative'>
              <Image
                src='/img/hero3.png'
                fill
                alt='Abisko'
                loading='lazy'
                sizes='100%'
                quality={80}
                className='-z-10 h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-[rgba(9,40,75,0.3)] to-white opacity-30 h-screen z-0'></div>
              <div className='z-10 max-w-2xl p-8 md:p-16 text-white absolute left-8 md:left-16 bottom-32'>
                <h2 className='subtitle'>Nasz Bestseller</h2>
                <h1 className='text-5xl font-bold uppercase my-2 tracking-[5px]'>
                  Zorza Polarna
                </h1>
                <p className='text-lg mt-4 flex gap-2 uppercase tracking-widest'>
                  <span>
                    <RiMapPin2Line size={24} color={'#00F8CA'} />
                  </span>
                  Abisko, Szwecja
                </p>
                <p className='text-sm mt-4'>
                  Phasellus vulputate maximus dolor eu porttitor. Duis
                  ullamcorper molestie magna, id mattis lorem eleifend a. Donec
                  sit amet quam magna. Nullam suscipit libero sit amet elit
                  hendrerit scelerisque sed sed tellus.
                </p>
                <div className='flex flex-col space-y-2 mt-6'>
                  <div className='flex items-center space-x-2'>
                    <span>
                      <IoPeopleSharp size={24} color={'#00F8CA'} />
                    </span>
                    <p>Max. 5 osób</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span>
                      <GiForestCamp size={24} color={'#00F8CA'} />
                    </span>
                    <p>Odpoczynek</p>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span>
                      <MdFamilyRestroom size={24} color={'#00F8CA'} />
                    </span>
                    <p>Przyjazny dla dzieci</p>
                  </div>
                </div>
                <button className='mt-6 border border-white rounded-full hover:bg-white hover:text-black px-6 py-3'>
                  Odkryj atrakcje
                </button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='w-full m-0 p-0'>
            <div className='h-screen flex items-center justify-center relative'>
              <Image
                src='/img/hero2.png'
                fill
                alt='Abisko'
                sizes='100%'
                loading='lazy'
                quality={80}
                className='-z-10 h-full w-auto object-cover'
              />
              <div className='absolute inset-0 bg-midnightNavy-950 opacity-30 z-0'></div>
              <div className='mx-auto w-1/2 text-white z-10'>
                <h1 className='text-4xl text-white font-lora leading-tight text-center'>
                  Piękno Laponii urzekło nas od pierwszego spojrzenia. Ta
                  magiczna kraina stała się naszym domem, miejscem, gdzie każdy
                  dzień przynosi nowe, niezapomniane przygody.
                </h1>
                <h2 className='text-lg text-center font-bold uppercase opacity-60 tracking-widest'>
                  Sylwia i Łukasz
                </h2>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='w-full m-0 p-0'>
            <div className='h-screen flex flex-col items-center justify-center relative'>
              <Image
                src='/img/hero5.png'
                fill
                alt='Abisko'
                loading='lazy'
                sizes='100%'
                quality={80}
                className='-z-10 h-full'
              />
              <div className='absolute inset-0 bg-midnightNavy-950 opacity-40 h-screen z-0'></div>
              <h2 className='text-lg font-bold text-center uppercase opacity-60 tracking-widest z-10'>
                Twoja podróż zaczyna się tutaj
              </h2>
              <h1 className='text-7xl text-center font-lora leading-tight z-10'>
                Odkryj nasze przewodniki <br /> i wyrusz w podróż po Laponii
              </h1>
              <div className='grid grid-cols-3 gap-8 max-w-screen-lg mx-auto mt-8 min-h-96'>
                <SmallBlogCard />
                <SmallBlogCard />
                <SmallBlogCard />
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
