import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import CategoryLabel from './CategoryLabel';

function FeaturedBlogCard({ post }: any) {
  return (
    <div className='flex flex-wrap my-8 shadow-xl rounded-3xl overflow-hidden'>
      <div className='basis-3/5'>
        <Image
          src={post.image}
          alt=''
          sizes='100%'
          className='h-full w-full'
          width={400}
          height={300}
        />
      </div>
      <div className='py-4 px-8 basis-2/5 '>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2'>
            {post.category.length > 0 &&
              post.category.map((category: any) => (
                <CategoryLabel
                  key={category.name}
                  name={category.name}
                  color={category.color}
                  setCurrentCategory=''
                />
              ))}
          </div>
          <p>{new Date(post.date).toLocaleDateString()}</p>
        </div>
        <p className='text-2xl my-4 font-bold'>{post.title}</p>
        <p>{post.excerpt}</p>
        <div className='flex justify-end'>
          <Link
            href={`/Blog/${post.slug}`}
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
