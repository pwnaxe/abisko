interface CategoryLabelProps {
  name: string
  color: string | null
  isSelected: boolean
  onClick: () => void
}

export function CategoryLabel({ name, color, isSelected, onClick }: CategoryLabelProps) {
  const getBackgroundColor = (color: string | null) => {
    if (color) {
      return `bg-[${color}]`
    }
    return 'bg-gray-500'
  }

  return (
    <button
      className={`px-4 py-1 rounded-full text-white ${getBackgroundColor(color)} 
      hover:opacity-80 transition-all ${isSelected ? 'ring-2 ring-white' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

