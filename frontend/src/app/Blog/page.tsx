import React from 'react';
import FeaturedBlogCard from '../components/FeaturedBlogCard';
import HorizontalBlogCard from '../components/HorizontalBlogCard';
import BlogCard from '../components/BlogCard';

function BlogPage() {
  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/blog-img.jpg)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-48 z-10'>
          <p className='subtitle text-center'>oczami podróżników</p>
          <p className='font-lora text-3xl'>Przeżyj z nami podróż do Laponii</p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='my-16'>Wybierz kategorię:</div>
        <FeaturedBlogCard />
        <HorizontalBlogCard />
        <div className='grid grid-cols-2 gap-4'>
          <BlogCard />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
