'use client'

import Image from 'next/image'
import { format } from 'date-fns'

interface BlogCardProps {
  title: string
  shortContent: Array<{ type: string; children: Array<{ type: string; text: string }> }>
  slug: string
  createdAt: string
  imageUrl: string
  tags: Array<{ name: string; Color: string }>
}

export function BlogCard({ title, shortContent, slug, createdAt, imageUrl, tags }: BlogCardProps) {
  const getShortContent = (content: BlogCardProps['shortContent']) => {
    return content[0]?.children[0]?.text || ''
  }

  return (
    <article className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2 py-1 text-xs rounded-full text-white"
              style={{ backgroundColor: tag.Color }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">
          {getShortContent(shortContent)}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-300">
            {format(new Date(createdAt), 'dd.MM.yyyy')}
          </time>
          <button className="text-white hover:underline text-sm font-medium">
            Czytaj więcej →
          </button>
        </div>
      </div>
    </article>
  )
}

