import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import type { BlogPost } from '@/app/types/blog'
import { getColorClass } from '../../../../utils/colorMap'

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`https://api.expeditionlapland.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error('Failed to fetch blog post')
    const data = await res.json()
    if (!data.data || data.data.length === 0) {
      return null;
    }
    return data.data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const { attributes } = post;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{attributes.title}</h1>
      {attributes.date && (
        <time className="text-gray-600 block mb-4">
          {format(new Date(attributes.date), 'd MMMM yyyy', { locale: pl })}
        </time>
      )}
      {attributes.author && (
        <p className="text-gray-600 mb-4">Author: {attributes.author}</p>
      )}
      {attributes.poster && attributes.poster.data && (
        <div className="relative h-64 md:h-96 mb-8">
          <Image
            src={`https://api.expeditionlapland.com${attributes.poster.data.attributes.formats.small.url}`}
            alt={attributes.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      {attributes.tags && attributes.tags.length > 0 && (
        <div className="flex gap-2 mb-4">
          {attributes.tags.map((tag) => (
            <span
              key={tag.id}
              className={`px-2 py-1 text-xs rounded-full text-white ${getColorClass(tag.Color)}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
      <div className="prose max-w-none">
        {attributes.content && attributes.content.map((contentBlock, index) => (
          <p key={index}>{contentBlock.children[0].text}</p>
        ))}
      </div>
    </article>
  )
}

