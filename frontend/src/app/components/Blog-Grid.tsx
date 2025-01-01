import { BlogCard } from "./BlogCard"
import { BlogPost } from "../../../utils/blogs"

interface BlogGridProps {
    posts: BlogPost[]
  }
  
  export function BlogGrid({ posts }: BlogGridProps) {
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
  
  