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
  const queryParameters = {filters: { blog_categories: {name: { $contains: category }} }, fields: ['Title', 'slug', 'Excerpt', 'createdAt', 'Featured'], populate: {  Thumbnail: { fields: ['url'] }, blog_categories: {  fields: ['*']}  }, pagination: {pageSize},  encodeValuesOnly: true   };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;
console.log('POSTS url', url.href)
  try {
    const response = await fetch(url.href, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const dataItems: DataItem[] = data.data.map((item: any) => {
      const flattened = flattenAttributes(item);
    
      return {
        slug: flattened.slug,
        title: flattened.Title,
        excerpt: flattened.Excerpt,
        date: flattened.createdAt,
        featured: flattened.Featured,
        category: flattened.blog_categories?.data.map((item: any) => ({name: item.name, color: item.color})),
        image: flattened.Thumbnail
        && getStrapiMedia(flattened.Thumbnail.url),
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
  const queryParameters = {    filters: { slug: { $eq: pageSlug } }, fields: ['Title', 'Excerpt', 'createdAt', 'Body'], populate: {  Thumbnail: { fields: ['url'] }, blog_categories: {  fields: ['*']}  }, pagination: {pageSize: 1, withCount: false },  encodeValuesOnly: true   };
  const queryString = qs.stringify(queryParameters, { encode: false });
  url.search = queryString;
console.log('POSTS url', url.href)
  try {
    const response = await fetch(url.href, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const flattened = flattenAttributes(data.data[0]);
  

    return {
      // @ts-ignore
      title: flattened.Title,
      excerpt: flattened.Excerpt,
      date: flattened.createdAt,
      body: flattened.Body,
      category: flattened.blog_categories?.data.map((item: any) => ({name: item.name, color: item.color})),
      image: flattened.Thumbnail
      && getStrapiMedia(flattened.Thumbnail.url),
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
        Authorization: `Bearer ${token}`,
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
        color: flattened.color
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
