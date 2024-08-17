import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function HorizontalBlogCard() {
  return (
    <div className='flex flex-wrap items-end my-8 shadow-xl rounded-3xl overflow-hidden'>
      <div className='basis-3/12'>
        <Image
          src='/img/blog-samp.jpg'
          alt=''
          sizes='100%'
          className='h-full w-full'
          width={400}
          height={300}
        />
      </div>
      <div className='py-4 px-8 basis-7/12 '>
        <div className='flex gap-4'>
          <div>Kategorie</div>
          <p>Data publikacji</p>
        </div>
        <p className='text-2xl my-4 font-bold'>
          Tytuł poradnika lub bloga który ma więcej niż jedną linijkę, posiada
          dwie linijki.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          est efficitur, cursus odio et sagittis pretium. Mauris ac purus quis
          est dictum sodales. Phasellus convallis eu est et tempus. Vestibulum
          sed tellus venenatis est molestie. Duis interdum velit eu est et
          tempus. Vestibulum sed tellus venenatis est molestie. Duis interdum
          velit non commodo eleifend. Suspendisse a cursus...
        </p>
      </div>
      <div className='flex basis-2/12'>
        <Link href='/Blog/sample-post' className='py-4 flex gap-2 items-center'>
          Czytaj więcej
          <MdArrowOutward size={24} />
        </Link>
      </div>
    </div>
  );
}

export default HorizontalBlogCard;
