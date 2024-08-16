import React from 'react';

function GuidesListPage() {
  return (
    <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/guides-img.jpg)] bg-bottom bg-cover'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
      <div className='mb-48 z-10'>
        <p className='subtitle text-center'>subtitle</p>
        <p className='font-lora text-3xl'>
          Dzielimy się wiedzą i doświadczeniem - dołącz do nas!
        </p>
      </div>
    </div>
  );
}

export default GuidesListPage;
