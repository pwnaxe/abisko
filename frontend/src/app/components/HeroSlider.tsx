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

async function fetchBlogs() {
  const res = await fetch('https://api.expeditionlapland.com/api/hero-blogs?populate[blog][populate]=image&populate[blog][populate]=tags&populate[blog][populate]=poster', {
    next: { revalidate: 5620 },
  });
  const data = await res.json();
  return data.data;
}

async function HeroSlider() {
  const blogs = await fetchBlogs();
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
              <div className='z-10 mx-auto'>
                <h2 className='text-sm lg:text-lg font-bold text-center uppercase opacity-60 tracking-widest'>
                  Twoja podróż zaczyna się tutaj
                </h2>
                <h1 className='text-4xl lg:text-7xl text-center font-lora leading-tight'>
                  Wyrusz w podróż <br />i odkryj magię Laponii
                </h1>
                <div className='flex flex-col lg:flex-row justify-center pt-24 lg:pt-0 mt-7 gap-4'>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-2 lg:px-5 py-3 transition-all duration-1000'>
                    Odkryj Laponię
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-2 lg:px-5 py-3 transition-all duration-1000'>
                    Przygotuj się do wyjazdu
                  </button>
                  <button className='border border-white rounded-full hover:bg-white hover:text-black px-2 lg:px-5 py-3 transition-all duration-1000'>
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
                className='-z-10 h-full object-cover brightness-50'
              />
              <div className='z-10 max-w-2xl text-white flex flex-col space-y-9 ml-40'>
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
                  hendrerit scelerisque sed sed tellus. Phasellus vulputate maximus dolor eu porttitor. Duis
                  ullamcorper molestie magna, id mattis lorem eleifend a. Donec
                  sit amet quam magna. Nullam suscipit libero sit amet elit
                  hendrerit scelerisque sed sed tellus.
                </p>
                <div className='flex flex-col space-y-6 mt-6'>
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
                <button className='mt-6 border border-white rounded-full hover:bg-white hover:text-black w-1/3 py-3 transition-all duration-1000'>
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
                className='-z-10 h-full w-auto object-cover brightness-50'
              />
              <div className='absolute inset-0 bg-midnightNavy-950 opacity-30 z-0'></div>
              <div className='mx-auto w-1/3 space-y-6 text-white z-10'>
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
                className='-z-10 h-full brightness-50'
              />
              <div className='absolute inset-0 bg-midnightNavy-950 opacity-40 h-screen z-0'></div>
              <h2 className='text-sm lg:text-lg font-bold text-center uppercase opacity-60 tracking-widest z-10'>
                Twoja podróż zaczyna się tutaj
              </h2>
              <h1 className='text-3xl lg:text-6xl text-center font-lora leading-tight z-10'>
                Odkryj nasze przewodniki <br /> i wyrusz w podróż po Laponii
              </h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 grid-row-span-1 gap-8 max-w-screen-lg mx-auto mt-8 h-96'>
                <div className='h-96'>
      <SmallBlogCard
        title={blogs[0].blog.title}
        shortContent={blogs[0].blog.shortContent}
        poster={blogs[0].blog.poster?.formats?.small?.url}
        slug={blogs[0].blog.slug}
        className='w-full h-full'
      />
      </div>
      <div className='h-96'>
      <SmallBlogCard
        title={blogs[1].blog.title}
        shortContent={blogs[1].blog.shortContent}
        poster={blogs[1].blog.poster?.formats?.small?.url}
        slug={blogs[1].blog.slug}
        className='w-full h-full hidden lg:block'
      /></div>
<div className='h-96'>
      <SmallBlogCard
        title={blogs[2].blog.title}
        shortContent={blogs[2].blog.shortContent}
        poster={blogs[2].blog.poster?.formats?.small?.url}
        slug={blogs[2].blog.slug}
        className='w-full h-full hidden lg:block'
      /></div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute z-50 top-1/2 -translate-y-1/2 left-8 bg-transparent text-white h-12 w-12 hover:scale-110 transition-all duration-1000' />
        <CarouselNext className='absolute z-50 top-1/2 -translate-y-1/2 right-8 bg-transparent text-white h-12 w-12 hover:scale-110 transition-all duration-1000' />
      </Carousel>
    </div>
  );
}

export default HeroSlider;
