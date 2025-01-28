export interface Tag {
  id: number
  name: string
  Color: string | null
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  content: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  shortContent: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  date: string;
  author: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  poster: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
      small: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  image: any;
  tags: Array<{
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Color: string;
  }>;
  hero_blogs: Array<{
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface BlogListProps {
  posts: BlogPost[]
  currentCategory: string
}

export type BlogCardSize = 'default' | 'large' | 'wide';

export interface BlogCardProps {
  post: BlogPost;
  size: BlogCardSize;
  className?: string;
}

