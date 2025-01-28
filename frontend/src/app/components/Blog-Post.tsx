import Link from 'next/link'
import Image from 'next/image'
import { BlogCardProps } from '../../types/blog'

export function BlogCard({ post, size, className }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.attributes.slug}`} className={`block ${className}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        {post.attributes.image && (
          <Image
            src={post.attributes.image.data.attributes.url || "/placeholder.svg"}
            alt={post.attributes.image.data.attributes.alternativeText || post.attributes.title}
            width={size === 'large' ? 1200 : size === 'wide' ? 800 : 400}
            height={size === 'large' ? 600 : size === 'wide' ? 400 : 200}
            className={`w-full object-cover ${size === 'large' ? 'h-96' : size === 'wide' ? 'h-64' : 'h-48'}`}
          />
        )}
        <div className="p-4">
          <h2 className={`font-semibold mb-2 ${size === 'large' ? 'text-3xl' : size === 'wide' ? 'text-2xl' : 'text-xl'}`}>
            {post.attributes.title}
          </h2>
          <p className={`text-gray-600 mb-4 ${size === 'large' ? 'text-lg' : 'text-base'}`}>
            {post.attributes.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.attributes.tags.data.map((tag) => (
              <span key={tag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {tag.attributes.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

