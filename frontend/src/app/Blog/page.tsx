'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Tag {
  id: number
  name: string
  Color: string
}

interface BlogPost {
  id: number
  title: string
  shortContent: Array<{ type: string; children: Array<{ type: string; text: string }> }>
  slug: string
  createdAt: string
  poster: {
    formats: {
      small: {
        url: string
      }
    }
  }
  tags: Tag[]
}

async function fetchTags(): Promise<Tag[]> {
  const res = await fetch('https://api.expeditionlapland.com/api/tags?populate=*')
  if (!res.ok) {
    throw new Error('Failed to fetch tags')
  }
  const data = await res.json()
  return data.data
}

async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await fetch('https://api.expeditionlapland.com/api/blogs?populate=*')
  if (!res.ok) {
    throw new Error('Failed to fetch blogs')
  }
  const data = await res.json()
  return data.data
}

function CategoryLabel({ name, color, isSelected, onClick }: { name: string; color: string; isSelected: boolean; onClick: () => void }) {
  const getBackgroundColor = (color: string) => {
    switch (color) {
      case 'Fjord Blue': return 'bg-[#0082C8]'
      case 'Light Blue': return 'bg-[#6BC3D6]'
      case 'Aurora Teal': return 'bg-[#00B7A3]'
      case 'Green': return 'bg-[#4E9814]'
      case 'Magenta': return 'bg-[#8838C6]'
      case 'Orange': return 'bg-[#EA8324]'
      default: return 'bg-gray-500'
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

function Navigation({ tags, currentCategory, setCurrentCategory }: { tags: Tag[], currentCategory: string, setCurrentCategory: (category: string) => void }) {
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

function HeroCard({ post }: { post: BlogPost }) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={post.poster.formats.small.url || "/placeholder.svg?height=600&width=1200"}
        alt={post.title}
        width={1200}
        height={600}
        className="object-cover w-full h-[400px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6 space-y-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <CategoryLabel
                key={tag.id}
                name={tag.name}
                color={tag.Color}
                isSelected={false}
                onClick={() => {}}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white">
            {post.title}
          </h2>
          <p className="text-sm text-gray-200 line-clamp-2">
            {post.shortContent[0]?.children[0]?.text || ""}
          </p>
          <div className="flex justify-between items-center pt-4">
            <span className="text-sm text-gray-300">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <button className="text-white hover:underline">
              Czytaj więcej →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  const { title, shortContent, poster, tags, createdAt } = post
  const imageUrl = poster?.formats?.small?.url || "/placeholder.svg?height=400&width=600"
  const excerpt = shortContent[0]?.children[0]?.text || ""

  return (
    <div className="overflow-hidden rounded-lg bg-card h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <CategoryLabel
                key={tag.id}
                name={tag.name}
                color={tag.Color}
                isSelected={false}
                onClick={() => {}}
              />
            ))}
          </div>
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-muted-foreground">
            {new Date(createdAt).toLocaleDateString()}
          </span>
          <button className="text-sm hover:underline">
            Czytaj więcej →
          </button>
        </div>
      </div>
    </div>
  )
}

function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const renderGridItem = (post: BlogPost, index: number) => {
    const isWide = index % 5 === 3
    return (
      <div key={post.id} className={isWide ? "col-span-2" : ""}>
        <BlogCard post={post} />
      </div>
    )
  }

  const renderGrid = () => {
    const grid = []
    for (let i = 0; i < posts.length; i += 5) {
      const chunk = posts.slice(i, i + 5)
      grid.push(
        <div key={i} className="grid grid-cols-3 gap-6">
          {chunk.slice(0, 3).map((post, index) => renderGridItem(post, i + index))}
        </div>
      )
      if (chunk.length > 3) {
        grid.push(
          <div key={i + "b"} className="grid grid-cols-3 gap-6">
            {chunk.slice(3).map((post, index) => renderGridItem(post, i + 3 + index))}
          </div>
        )
      }
    }
    return grid
  }

  return <div className="space-y-8">{renderGrid()}</div>
}

export default async function BlogPage() {
  const [currentCategory, setCurrentCategory] = useState('')
  const [tags, setTags] = useState<Tag[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedTags, fetchedPosts] = await Promise.all([fetchTags(), fetchBlogs()])
        setTags(fetchedTags)
        setBlogPosts(fetchedPosts)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load data')
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="min-h-screen bg-background flex items-center justify-center">{error}</div>
  }
  
  return (
    <>
      <div className='h-[500px] relative flex items-end justify-center bg-[url(/img/blog-img.jpg)] bg-bottom bg-cover'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0'></div>
        <div className='mb-48 z-10'>
          <p className='subtitle text-center'>oczami podróżników</p>
          <p className='pageTitle'>Przeżyj z nami podróż do Laponii</p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto text-black'>
      <Navigation tags={tags} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <div className="container mx-auto px-4 py-6 space-y-8 w-4/5">
        {blogPosts.length > 0 && <HeroCard post={blogPosts[0]} />}
        <BlogGrid posts={blogPosts} />
      </div>
      </div>
    </>
  );
}
