"use client";
import Image from "next/image"
import { BlogPost } from "../../../utils/blogs"
import CategoryLabel from "./Category-label"

interface HeroCardProps {
    post: BlogPost
  }
  
  export function HeroCard({ post }: HeroCardProps) {
    const { title, shortContent, poster, tags, createdAt } = post
    const imageUrl = poster?.formats?.small?.url || "/placeholder.svg?height=600&width=1200"
    const excerpt = shortContent[0]?.children[0]?.text || ""
  
    return (
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={600}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 p-6 space-y-2">
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
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
            <p className="text-sm text-gray-200 line-clamp-2">
              {excerpt}
            </p>
            <div className="flex justify-between items-center pt-4">
              <span className="text-sm text-gray-300">
                {new Date(createdAt).toLocaleDateString()}
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
  
  