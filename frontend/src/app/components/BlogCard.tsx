import Image from "next/image"
import { BlogPost } from "../../../utils/blogs"
import CategoryLabel from "./Category-label"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
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
                setCurrentCategory={() => {}}
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