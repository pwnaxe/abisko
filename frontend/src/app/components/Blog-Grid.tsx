import type { BlogListProps } from '../types/blog'
import { BlogCard } from './Blog-Card'

export function BlogGrid({ posts, currentCategory }: BlogListProps) {
  const filteredPosts = currentCategory
    ? posts.filter(post => post.tags.some(tag => tag.name === currentCategory))
    : posts

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {filteredPosts.map((post, index) => {
        let size = 'default';
        if (index === 0) {
          size = 'large';
        } else if (index === 4 || index === 7 || ((index - 4) % 5 === 0 && index > 7)) {
          size = 'wide';
        }
        return (
          <BlogCard 
            key={post.id} 
            post={post} 
            size={size}
            className={
              size === 'large' 
                ? 'md:col-span-3' 
                : size === 'wide' 
                  ? 'md:col-span-2' 
                  : ''
            }
          />
        );
      })}
    </div>
  )
}

