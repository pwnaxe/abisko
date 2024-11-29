'use client';
import React, { useEffect, useState } from 'react';
import FeaturedBlogCard from '../components/FeaturedBlogCard';
import HorizontalBlogCard from '../components/HorizontalBlogCard';
import BlogCard from '../components/BlogCard';
import {
  DataItem,
  getBlogCategories,
  getBlogPosts,
} from '../../../utils/posts';
import CategoryLabel from '../components/CategoryLabel';

function BlogPage() {
  const [posts, setPosts] = useState<DataItem[]>([]);
  const [articlesToShow, setAtriclesToShow] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts(
        '/api/blogs',
        articlesToShow,
        currentCategory
      );
      setPosts(data);
    };

    fetchPosts();
  }, [currentCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getBlogCategories('/api/blog-categories');
      setBlogCategories(data as any);
    };
    fetchCategories();
  }, []);

  console.log('[Blog Page]: ', posts);
  console.log('[Blog Page] categoires: ', blogCategories);
  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/blog-img.jpg)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-48 z-10'>
          <p className='subtitle text-center'>oczami podróżników</p>
          <p className='pageTitle'>Przeżyj z nami podróż do Laponii</p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='my-16 flex gap-4 items-center'>
          <div onClickCapture={() => setCurrentCategory('')}>
            {currentCategory === '' ? (
              <p>Wybierz ktegorie:</p>
            ) : (
              <p className='px-4 py-1  rounded-full border hover:cursor-pointer'>
                Wszystkie
              </p>
            )}
          </div>
          <div className='flex gap-2'>
            {blogCategories.length > 0 &&
              blogCategories.map((category: any) => (
                <CategoryLabel
                  key={category.name}
                  name={category.name}
                  color={category.color}
                  setCurrentCategory={setCurrentCategory}
                />
              ))}
          </div>
        </div>
        <div>
          {posts.length > 0 &&
            posts.map(
              (post: any) =>
                post.Featured && (
                  <FeaturedBlogCard key={post.slug} post={post} />
                )
            )}
        </div>
        <div>
          {posts.length > 0 &&
            posts.map(
              (post: any) =>
                !post.Featured && (
                  <HorizontalBlogCard key={post.slug} post={post} />
                )
            )}
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <BlogCard />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
