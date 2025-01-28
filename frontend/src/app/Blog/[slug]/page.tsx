import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/app//types/blog'

async function getBlogPost(slug: string): Promise<BlogPost['data']> {
  const res = await fetch(`https://api.expeditionlapland.com/api/blogs/${slug}?populate=*`, { next: { revalidate: 60 } })
  
  if (!res.ok) {
    notFound()
  }

  const data: BlogPost = await res.json()
  return data.data
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.attributes.title}</h1>
        <p className="text-gray-600 mb-4">{new Date(post.attributes.publishedAt).toLocaleDateString()}</p>
        {post.attributes.image && (
          <Image
            src={post.attributes.image.data.attributes.url || "/placeholder.svg"}
            alt={post.attributes.image.data.attributes.alternativeText || post.attributes.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
      </header>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      <footer className="mt-12">
        <div className="flex items-center mb-4">
          {post.attributes.author.data.attributes.avatar && (
            <Image
              src={post.attributes.author.data.attributes.avatar.data.attributes.url || "/placeholder.svg"}
              alt={post.attributes.author.data.attributes.name}
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
          )}
          <div>
            <p className="font-semibold">{post.attributes.author.data.attributes.name}</p>
            {post.attributes.author.data.attributes.bio && (
              <p className="text-sm text-gray-600">{post.attributes.author.data.attributes.bio}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          {post.attributes.tags.data.map((tag) => (
            <span key={tag.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag.attributes.name}
            </span>
          ))}
        </div>
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Back to all posts
        </Link>
      </footer>
    </article>
  )
}

