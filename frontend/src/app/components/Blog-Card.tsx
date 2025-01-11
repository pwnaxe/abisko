'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import type { BlogPost } from '../types/blog'
import { getColorClass } from '../../../utils/colorMap'

interface BlogCardProps {
  post: BlogPost
  size?: 'default' | 'wide' | 'large'
  className?: string
}

export function BlogCard({ post, size = 'default', className = '' }: BlogCardProps) {
  const getShortContent = (content: BlogPost['shortContent']) => {
    return content[0]?.children[0]?.text || ''
  }

  const cardHeight = size === 'large' ? 'h-96' : 'h-96'
  const titleSize = size === 'large' ? 'text-xl' : 'text-md'
  const contentLines = size === 'large' ? 'line-clamp-4' : 'line-clamp-3'
  const textwidth = size === 'large' ? 'w-5/12' : 'w-11/12'
  const hasImage = post.poster && post.poster.formats && post.poster.formats.small && post.poster.formats.small.url

  return (
    <article className={`group relative overflow-hidden rounded-lg shadow-lg transition-all hover:-translate-y-1 ${cardHeight} ${className}`}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="absolute inset-0">
        {hasImage ? (
            <Image
              src={`https://api.expeditionlapland.com${post.poster.formats.small.url}`}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30" />
        </div>
        <div className="relative h-full flex flex-col justify-end p-4 text-white z-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className={`px-2 py-1 text-xs rounded-full ${getColorClass(tag.Color)}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <h2 className={`${titleSize} font-bold ${textwidth} mb-2 line-clamp-2`}>
            {post.title}
          </h2>
          <p className={`text-xs mb-2 ${textwidth} ${contentLines}`}>
            {getShortContent(post.shortContent)}
          </p>
          <div className="flex items-center justify-between pt-4">
            <time className="text-sm">
              {format(new Date(post.createdAt), 'd MMMM yyyy', { locale: pl })}
            </time>
            <span className="text-sm font-medium group-hover:underline">
              Czytaj więcej →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

