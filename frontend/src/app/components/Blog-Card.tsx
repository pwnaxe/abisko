'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import type { BlogPost } from '../types/blog'

interface BlogCardProps {
  post: BlogPost
  size?: 'default' | 'wide' | 'large'
  className?: string
}

export function BlogCard({ post, size = 'default', className = '' }: BlogCardProps) {
  const getShortContent = (content: BlogPost['shortContent']) => {
    return content[0]?.children[0]?.text || ''
  }

  const imageHeight = size === 'large' ? 'h-96' : 'h-48'
  const titleSize = size === 'large' ? 'text-3xl' : 'text-xl'
  const contentLines = size === 'large' ? 'line-clamp-4' : 'line-clamp-3'

  return (
    <article className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 ${className}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className={`relative ${imageHeight} w-full overflow-hidden`}>
          <Image
            src={`https://api.expeditionlapland.com${post.poster.formats.small.url}`}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 text-xs rounded-full text-white"
                style={{ 
                  backgroundColor: tag.Color || '#6b7280',
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <h2 className={`${titleSize} font-bold text-gray-900 mb-2 line-clamp-2`}>
            {post.title}
          </h2>
          <p className={`text-sm text-gray-600 mb-4 ${contentLines}`}>
            {getShortContent(post.shortContent)}
          </p>
          <div className="flex items-center justify-between border-t pt-4">
            <time className="text-sm text-gray-500">
              {format(new Date(post.createdAt), 'd MMMM yyyy', { locale: pl })}
            </time>
            <span className="text-sm font-medium text-blue-600 group-hover:underline">
              Czytaj więcej →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

