import Image from 'next/image';

const back = {
  zIndex: -1,
};

export default function Home() {
  return (
    <main className='w-full h-auto'>
      <Image
        src='/img/hero.png'
        fill
        alt='Abisko'
        sizes="100vw"
        quality={80}
        style={back}
      />
      <nav>
        <div className='flex flex-row justify-between'>
          <Image
            src='/svg/logoWhite.svg'
            alt='Abisko logo'
            width={200}
            height={200}
          />
          <div>
            <ol className='flex flex-row space-x-4 items-center justify-center grow'>
              <li>
                <a href='#'>
                  Atrakcje
                </a>
              </li>
              <li>
                <a href='#'>
                  Aurora
                </a>
              </li>
              <li>
                <a href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#'>
                  Poradniki
                </a>
              </li>
              <li>
                <a href='#'>
                  O nas
                </a>
              </li>              
            </ol>
          </div> 
          <div className=''>
          <button className='bg-white text-black rounded-lg p-2'>
            PL
          </button>
          </div>         
        </div>
      </nav>
    </main>
  );
}
