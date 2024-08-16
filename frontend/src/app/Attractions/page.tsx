import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import AttractionCard from '../components/AttractionCard';
import SmallBlogCard from '../components/SmallBlogCard';

export default function AttractionsPage() {
  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/AboutUs.webp)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-24 z-10'>
          <p className='subtitle text-center'>odkryj laponię</p>
          <p className='font-lora text-3xl'>
            Znajdź atrakcje dla siebie i bliskich
          </p>
          <div className='px-4'>
            <form className='px-4 py-2 rounded-full w-full my-8 bg-white/75 relative'>
              <input
                type='text'
                placeholder='Światła na niebie'
                className='rounded-full w-full bg-transparent outline-none text-black'
              />
              <button
                type='submit'
                className='absolute top-1/2 -translate-y-1/2 right-8'
              >
                <CiSearch size={24} color={'#000'} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto text-black'>
        <div className='my-16'>Sortowanie</div>
        <div className='grid grid-cols-3 my-8 gap-6'>
          <SmallBlogCard />
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
        </div>
      </div>
    </>
  );
}
