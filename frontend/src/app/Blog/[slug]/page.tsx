'use client';
import AttractionCard from '@/app/components/AttractionCard';
import SmallBlogCard from '@/app/components/SmallBlogCard';
import React, { useEffect, useState } from 'react';
import { getBlogPost } from '../../../../utils/posts';
import CategoryLabel from '@/app/components/CategoryLabel';

interface Props {
  params: any;
}

function BlogPost({ params: { slug } }: Props) {
  console.log('slug', slug);
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPost('/api/blogs', slug);
      setPost(data);
      setIsLoading(true);
    };

    fetchPosts();
  }, []);

  console.log('[POST PAGE]: ', post);
  if (!isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <div
        className='h-[500px] reative flex items-end justify-center'
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute top-0 left-0 w-full h-[500px] bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-48 z-10'>
          <p className='subtitle text-center'>subtitle</p>
          <p className='font-lora text-3xl'>{post.title}</p>
          {/* <div className='mt-2 flex gap-4 justify-center'>
            {post.category.length > 0 &&
              post.category.map((category: any) => (
                <CategoryLabel
                  key={category.name}
                  name={category.name}
                  color={category.color}
                  setCurrentCategory=''
                />
              ))}
          </div> */}
        </div>
      </div>
      <div className='max-w-screen-lg mx-auto text-black my-16'>
        <p className='uppercase opacity-30 mb-8'>
          {' '}
          {new Date(post.date).toLocaleDateString()}
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
          massa. Vestibulum eget enim quam. In eu elementum tellus. Sed lacinia
          arcu id nisl luctus pretium. Curabitur rutrum, est eu accumsan tempus,
          augue diam condimentum ipsum, eget euismod tortor ipsum bibendum
          nulla. Donec commodo dapibus quam et consectetur. Donec id elit id
          metus ornare malesuada a facilisis erat. Fusce vitae lorem quis dui
          consequat gravida in non orci. Praesent at molestie nulla, ac viverra
          orci. Mauris rutrum, dui id congue fermentum, quam felis viverra
          ligula, blandit ligula quis mauris. Vestibulum nec risus sapien.
          Quisque vel faucibus eros. Quisque a leo sit amet tortor porta
          blandit. Praesent ut velit in risus malesuada viverra. Vivamus
          tincidunt ante mauris. Sed non nisi mollis, scelerisque nisl sit amet,
          efficitur augue. Quisque fermentum dui a tincidunt iaculis. Morbi
          malesuada maximus dui ac sagittis. In sollicitudin nec lorem eu
          viverra. Praesent posuere fermentum nisi porttitor scelerisque.
          Pellentesque et condimentum diam, nec dictum velit. In lacinia egestas
          leo, quis pretium nibh luctus consectetur. Proin in pharetra ipsum.
          Mauris sagittis erat scelerisque justo feugiat vestibulum nec vel est.
          Donec quis facilisis eros, non dictum massa. Nunc porta tortor augue,
          ut finibus magna eleifend non. Nam commodo lacus posuere, tristique
          arcu quis, luctus nisl. Aliquam ac lectus nec mauris scelerisque
          semper. Donec venenatis posuere pretium.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-8 text-black'>
        {/* <SmallBlogCard />
        <AttractionCard />
        <AttractionCard /> */}
      </div>
    </>
  );
}

export default BlogPost;
