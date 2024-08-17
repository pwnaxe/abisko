import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function FeaturedBlogCard() {
  return (
    <div className='flex flex-wrap my-8 shadow-xl rounded-3xl overflow-hidden'>
      <div className='basis-3/5'>
        <Image
          src='/img/blog-samp.jpg'
          alt=''
          sizes='100%'
          className='h-full w-full'
          width={400}
          height={300}
        />
      </div>
      <div className='py-4 px-8 basis-2/5 '>
        <div className='flex gap-4'>
          <div>Kategorie</div>
          <p>Data publikacji</p>
        </div>
        <p className='text-2xl my-4 font-bold'>
          Tytuł poradnika lub bloga który ma więcej niż jedną linijkę, posiada
          nawet trzy linijki.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis
          augue. Ut et ligula non lectus ornare laoreet vitae id neque. Fusce ac
          rutrum risus. Quisque mi mauris, consectetur a semper non, feugiat
          quis velit. Ut maximus nisi id tristique lobortis. Curabitur dui
          velit, ornare a tellus eu, elementum congue nisl. Vestibulum a orci
          sed risus tristique porta non sit amet risus. Suspendisse viverra
          turpis gravida lectus dapibus pulvinar. Fusce a lectus ut lectus
          aliquet rutrum. Aenean eu risus eget ante bibendum lacinia et vitae
          massa. Sed lacinia arcu id nisl luctus pretium. Curabitur rutrum, est
          eu accumsan tempus, augue diam condimentum ipsum, eget euismod tortor
          ipsum bibendum nulla. Donec commodo dapibus quam et consectetur. Donec
          id elit id metus ornare malesuada a facilisis erat. Fusce vitae lorem
          quis dui consequat gravida in non orci. Praesent at molestie nulla, ac
          viverra orci.
        </p>
        <div className='flex justify-end'>
          <Link
            href='/Blog/sample-post'
            className='py-4 flex gap-2 items-center'
          >
            Czytaj więcej
            <MdArrowOutward size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlogCard;
