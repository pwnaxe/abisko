'use client'

import { useState, useEffect } from 'react'
import { BlogGrid } from '../components/Blog-Grid'
import { Navigation } from '../components/Navigation'
import SearchBar from '../components/SearchBar'
import type { BlogPost, Tag } from '../types/blog'

export default function BlogPage() {
  const [currentCategory, setCurrentCategory] = useState('')
  const [tags, setTags] = useState<Tag[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)

    Promise.all([
      fetch('https://api.expeditionlapland.com/api/tags')
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch tags')
          return res.json()
        })
        .then(data => setTags(data.data))
        .catch(() => setError('Failed to load tags')),

      fetch('https://api.expeditionlapland.com/api/blogs?populate=*')
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch blogs')
          return res.json()
        })
        .then(data => setBlogPosts(data.data))
        .catch(() => setError('Failed to load blogs')),
    ]).finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="min-h-screen bg-background flex items-center justify-center">{error}</div>
  }

  return (
    <>
      <div className="h-[500px] relative flex items-end justify-center bg-[url(/img/blog-img.jpg)] bg-bottom bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="my-auto pt-16 z-10">
          <p className="subtitle text-center mb-3 text-white">Subtitle</p>
          <h1 className="pageTitle text-4xl md:text-5xl font-bold text-center text-white mb-8">
            Dzielimy się wiedzą i doświadczeniem - dołącz do nas!
          </h1>
          <SearchBar />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Navigation tags={tags} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <div className="container mx-auto px-4 py-6 w-4/5">
          <BlogGrid posts={blogPosts} currentCategory={currentCategory} />
        </div>
      </div>
    </>
  )
}

