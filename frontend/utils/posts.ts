import qs from 'qs'
import { flattenAttributes, getStrapiURL, getStrapiMedia } from "./utils";

const baseUrl = getStrapiURL();
const token = process.env.STRAPI_API_TOKEN;

export interface DataItem {
  image: string;
  title: string;
  excerpt: string;
  createdAt: string;
  slug: string;
  category: any
}




export async function getBlogPosts(endpoint: string, pageSize: number, category: string ): Promise<DataItem[]> {
  const url = new URL(endpoint, baseUrl);
  const queryParameters = {filters: { blog_categories: {name: { $contains: category }} }, fields: ['title', 'slug', 'shortContent', 'createdAt', 'author', 'Featured'], populate: {  poster: { fields: ['url'] }, blog_categories: {  fields: ['*']}  }, pagination: {pageSize},  encodeValuesOnly: true   };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;
console.log('POSTS url', url.href)
  try {
    const response = await fetch(url.href, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const dataItems: DataItem[] = data.data.map((item: any) => {
      const flattened = flattenAttributes(item);
    console.log('flattened', flattened)
      return {
        slug: flattened.slug,
        title: flattened.title,
        excerpt: flattened.shortContent,
        date: flattened.createdAt,
        author: flattened.author,
        Featured: flattened.Featured,
        category: Object.entries( flattened.blog_categories).map(([key, value]: any) => ({
          name: value.name,
          color: value.Color,
        })),
        // category: flattened.blog_categories?.data.map((item: any) => ({name: item.name, color: item.Color})),
        image: flattened.poster
        && getStrapiMedia(flattened.poster.url),
      };
    });
    
    return dataItems;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// GET SINGLE BLOG POST 
export async function getBlogPost(endpoint: string, pageSlug: string ): Promise<DataItem[]> {
  const url = new URL(endpoint, baseUrl);
  const queryParameters = {    filters: { slug: { $eq: pageSlug } }, fields: ['title',  'slug', 'createdAt', 'author', 'createdAt', 'content'], populate: {  poster: { fields: ['url'] }, blog_categories: {  fields: ['*']}  }, pagination: {pageSize: 1, withCount: false },  encodeValuesOnly: true   };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;
console.log('Single POST url', url.href)
  try {
    const response = await fetch(url.href, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const flattened = flattenAttributes(data.data[0]);
  

    return {
      // @ts-ignore
      title: flattened.title,
      date: flattened.createdAt,
      body: flattened.content,
      category: flattened.blog_categories?.data.map((item: any) => ({name: item.name, color: item.color})),
      author: flattened.author,
      image: flattened.poster
      && getStrapiMedia(flattened.poster.url),
    };
    
   
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getBlogCategories(endpoint: string): Promise<DataItem[]> {
  const url = new URL(endpoint, baseUrl);
  const queryParameters = { populate: "*"};
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;

  try {
    const response = await fetch(url.href, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
  
    const dataItems: DataItem[] = data.data.map((item: any) => {
      const flattened = flattenAttributes(item);
    
      return {
        name: flattened.name,
        color: flattened.Color
      };
    });
    
    return dataItems;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// export async function getBlogPost(slug: string) {
//   const { data } = await ({
//     filters: { slug: { $eq: slug } },
//     fields: ['slug', 'title','shortdesc', 'date', 'longdescription'],
//     populate: { image: { fields: ['url'] } },
//     pagination: { pageSize: 1, withCount: false },
//   });
//   if (data.length === 0) {
//     return null;
//   }
//   const item = data[0];
//   return {
//     ...toArticle(item),
//   };
// }
