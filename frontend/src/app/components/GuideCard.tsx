import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function GuideCard() {
  return (
    <div className='shadow-xl rounded-3xl overflow-hidden'>
      <div className='relative h-[500px]'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent'></div>
        <Image
          src='/img/hero.png'
          alt=''
          sizes='100%'
          className='h-full w-full'
          width={400}
          height={300}
        />
        <div className='pb-4 px-8 absolute bottom-0 left-0 bg-transparent w-full '>
          <div className='text-white'>
            <p>Kategorie</p>
          </div>
          <p className='text-2xl font-bold text-white'>
            Tytuł poradnik/bloga który ma więcej niż jedną linijkę.
          </p>
          <p className='text-white my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            est efficitur, interdum mauris et, laoreet leo. Praesent cursus odio
            et sagittis pretium.
          </p>

          <div className='flex justify-between items-center text-white'>
            <p>Data publikacji</p>
            <Link
              href='/Guides/sample-guide'
              className='py-4 flex gap-2 items-center'
            >
              Czytaj więcej
              <MdArrowOutward size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
