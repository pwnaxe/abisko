'use client'

import { useState, useEffect  } from 'react'
import CategoryLabel from './Category-label'
import { fetchTags, Tag } from '../../../utils/blogs'

export function Navigation() {
  const [currentCategory, setCurrentCategory] = useState('')
  const [tags, setTags] = useState<Tag[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTags() {
      try {
        const fetchedTags = await fetchTags()
        setTags(fetchedTags)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load categories')
        setIsLoading(false)
      }
    }
    loadTags()
  }, [])

  if (isLoading) {
    return <nav className="flex gap-2 overflow-x-auto py-4 px-4 md:px-6">Loading categories...</nav>
  }

  if (error) {
    return <nav className="flex gap-2 overflow-x-auto py-4 px-4 md:px-6">{error}</nav>
  }

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

