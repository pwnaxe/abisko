import { CategoryLabel } from './Category-label'
import type { Tag } from '../types/blog'

interface NavigationProps {
  tags: Tag[]
  currentCategory: string
  setCurrentCategory: (category: string) => void
}

export function Navigation({ tags, currentCategory, setCurrentCategory }: NavigationProps) {
  return (
    <nav className="flex gap-2 overflow-x-auto py-4 px-4 md:px-6">
      {tags.map((tag) => (
        <CategoryLabel
          key={tag.id}
          name={tag.name}
          color={tag.Color}
          isSelected={currentCategory === tag.name}
          onClick={() => setCurrentCategory(tag.name)}
        />
      ))}
    </nav>
  )
}

