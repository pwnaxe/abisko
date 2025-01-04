export interface Tag {
    id: number
    name: string
    Color: string | null
  }
  
  export interface BlogPost {
    id: number
    title: string
    shortContent: Array<{
      type: string
      children: Array<{
        type: string
        text: string
      }>
    }>
    slug: string
    createdAt: string
    poster: {
      formats: {
        small: {
          url: string
        }
      }
    }
    tags: Tag[]
  }
  
  export interface BlogListProps {
    posts: BlogPost[]
    currentCategory: string
  }
  
  