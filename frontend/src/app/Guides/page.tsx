// 'use client';
// import React, { useEffect, useState } from 'react';
// import BigGuideCard from '../components/BIgGuideCard';
// import GuideCard from '../components/GuideCard';
// import { getGuidesCategories, getGuidesPosts } from '../../../utils/guides';
// import { DataItem } from '../../../utils/posts';
// import CategoryLabel from '../components/CategoryLabel';

// function GuidesListPage() {
//   const [posts, setPosts] = useState<DataItem[]>([]);
//   const [articlesToShow, setAtriclesToShow] = useState(9);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentCategory, setCurrentCategory] = useState('');
//   const [blogCategories, setBlogCategories] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await getGuidesPosts(
//         '/api/guides',
//         articlesToShow,
//         currentCategory
//       );
//       setPosts(data);
//       setIsLoading(true);
//     };

//     fetchPosts();
//   }, [currentCategory]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await getGuidesCategories('/api/guide-categories');
//       setBlogCategories(data as any);
//     };
//     fetchCategories();
//   }, []);
//   console.log('[Guides Page]', posts);

//   return (
//     <>
//       <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/guides-img.jpg)] bg-bottom bg-cover'>
//         <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
//         <div className='mb-48 z-10'>
//           <p className='subtitle text-center'>subtitle</p>
//           <p className='pageTitle'>
//             Dzielimy się wiedzą i doświadczeniem - dołącz do nas!
//           </p>
//         </div>
//       </div>
//       <div className='max-w-screen-xl mx-auto text-black'>
//         <div className='my-16 flex gap-4 items-center'>
//           <div onClickCapture={() => setCurrentCategory('')}>
//             {currentCategory === '' ? (
//               <p>Wybierz kategorie:</p>
//             ) : (
//               <p className='px-4 py-1  rounded-full border hover:cursor-pointer'>
//                 Wszystkie
//               </p>
//             )}
//           </div>
//           <div className='flex gap-2'>
//             {blogCategories.length > 0 &&
//               blogCategories.map((category: any) => (
//                 <CategoryLabel
//                   key={category.name}
//                   name={category.name}
//                   color={category.color}
//                   setCurrentCategory={setCurrentCategory}
//                 />
//               ))}
//           </div>
//         </div>
//         <div className=''>
//           {posts.length > 0 &&
//             posts.map(
//               (post: any) =>
//                 post.Featured && (
//                   <BigGuideCard
//                     key={post.slug}
//                     post={post}
//                     isLoading={isLoading}
//                   />
//                 )
//             )}

//           <div className='grid grid-cols-3 gap-8 my-8'>
//             {posts.length > 0 &&
//               posts.map(
//                 (post: any) =>
//                   !post.Featured && (
//                     <GuideCard
//                       key={post.slug}
//                       post={post}
//                       isLoading={isLoading}
//                     />
//                   )
//               )}
//           </div>
//           <div className='grid grid-cols-3 gap-8 my-8'>
//             <div className='col-span-2'></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default GuidesListPage;
