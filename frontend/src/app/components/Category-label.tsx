'use client'

import React from 'react'

interface CategoryLabelProps {
  name: string
  color: string
  isSelected: boolean
  onClick: () => void
}

function CategoryLabel({ name, color, isSelected, onClick }: CategoryLabelProps) {
  const getBackgroundColor = (color: string) => {
    switch (color) {
      case 'Fjord Blue':
        return 'bg-[#0082C8]'
      case 'Light Blue':
        return 'bg-[#6BC3D6]'
      case 'Aurora Teal':
        return 'bg-[#00B7A3]'
      case 'Green':
        return 'bg-[#4E9814]'
      case 'Magenta':
        return 'bg-[#8838C6]'
      case 'Orange':
        return 'bg-[#EA8324]'
      default:
        return 'bg-gray-500' // Default color if none matches
    }
  }

  return (
    <button
      className={`px-4 py-1 rounded-full text-white ${getBackgroundColor(color)} 
      hover:opacity-65 transition-all ${isSelected ? 'ring-2 ring-white' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default CategoryLabel

