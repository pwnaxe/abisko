'use client';
import React from 'react';

function CategoryLabel({
  name,
  color,
  setCurrentCategory = '',
}: {
  name: string;
  color: string;
  setCurrentCategory: any;
}) {
  return (
    <p
      className={`px-4 py-1  rounded-full text-white ${
        color === 'Fiord Blue' && 'bg-[#0082C8]'
      } ${color === 'Light Blue' && 'bg-[#6BC3D6]'} ${
        color === 'Light Green' && 'bg-[#00B7A3]'
      } ${color === 'Green' && 'bg-[#4E9814]'} ${
        color === 'Purple' && 'bg-[#8838C6]'
      } ${color === 'Orange' && 'bg-[#EA8324]'} ${
        setCurrentCategory !== '' &&
        'hover:opacity-65 hover:cursor-pointer transition-all'
      } `}
      onClick={() => setCurrentCategory(name)}
    >
      {name}
    </p>
  );
}

export default CategoryLabel;
