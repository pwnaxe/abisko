interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

interface StrapiSingleResponse<T> {
    data: T;
    meta: {};
}

export interface Attraction {
    id: number;
    attributes: {
        title: string;
        description?: string;
        rating: number;
        location: string;
        duration: string;
        price: string;
        currency: 'SEK' | 'PLN' | 'EUR';
        image: {
            data: {
                id: number;
                attributes: {
                    url: string;
                    alternativeText?: string;
                    width: number;
                    height: number;
                };
            };
        };
        gallery?: {
            data: Array<{
                id: number;
                attributes: {
                    url: string;
                    alternativeText?: string;
                    width: number;
                    height: number;
                };
            }>;
        };
        itemId: string;
        categoryId: string;
        host: string;
        isSpecial: boolean;
        isLarge: boolean;
        slug: string;
        category?: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    slug: string;
                    description?: string;
                };
            };
        };
        tags?: {
            data: Array<{
                id: number;
                attributes: {
                    name: string;
                    slug: string;
                    Color?: string;
                };
            }>;
        };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface AttractionCategory {
    id: number;
    attributes: {
        name: string;
        slug: string;
        description?: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

export interface Tag {
    id: number;
    attributes: {
        name: string;
        slug: string;
        Color?: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1339/api';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

class StrapiAPI {
    private baseURL: string;
    private headers: HeadersInit;

    constructor() {
        this.baseURL = STRAPI_API_URL;
        this.headers = {
            'Content-Type': 'application/json',
        };

        if (STRAPI_API_TOKEN) {
            this.headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
        }
    }

    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;

        try {
            const response = await fetch(url, {
                headers: this.headers,
                ...options,
            });

            if (!response.ok) {
                throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Strapi API request failed:', error);
            throw error;
        }
    }

    // Attractions
    async getAttractions(params?: {
        populate?: string;
        filters?: Record<string, any>;
        sort?: string[];
        pagination?: {
            page?: number;
            pageSize?: number;
        };
    }): Promise<StrapiResponse<Attraction[]>> {
        const searchParams = new URLSearchParams();

        if (params?.populate) {
            searchParams.append('populate', params.populate);
        }

        if (params?.filters) {
            Object.entries(params.filters).forEach(([key, value]) => {
                searchParams.append(`filters[${key}]`, value);
            });
        }

        if (params?.sort) {
            params.sort.forEach((sortItem, index) => {
                searchParams.append(`sort[${index}]`, sortItem);
            });
        }

        if (params?.pagination) {
            if (params.pagination.page) {
                searchParams.append('pagination[page]', params.pagination.page.toString());
            }
            if (params.pagination.pageSize) {
                searchParams.append('pagination[pageSize]', params.pagination.pageSize.toString());
            }
        }

        const queryString = searchParams.toString();
        const endpoint = `/attractions${queryString ? `?${queryString}` : ''}`;

        return this.request<StrapiResponse<Attraction[]>>(endpoint);
    }

    async getAttraction(id: number, populate?: string): Promise<StrapiSingleResponse<Attraction>> {
        const params = populate ? `?populate=${populate}` : '';
        return this.request<StrapiSingleResponse<Attraction>>(`/attractions/${id}${params}`);
    }

    // Categories
    async getAttractionCategories(): Promise<StrapiResponse<AttractionCategory[]>> {
        return this.request<StrapiResponse<AttractionCategory[]>>('/attraction-categories');
    }

    async getAttractionCategory(id: number): Promise<StrapiSingleResponse<AttractionCategory>> {
        return this.request<StrapiSingleResponse<AttractionCategory>>(`/attraction-categories/${id}`);
    }

    // Tags
    async getTags(): Promise<StrapiResponse<Tag[]>> {
        return this.request<StrapiResponse<Tag[]>>('/tags');
    }

    async getTag(id: number): Promise<StrapiSingleResponse<Tag>> {
        return this.request<StrapiSingleResponse<Tag>>(`/tags/${id}`);
    }
}

export const strapiAPI = new StrapiAPI();

// Helper function to get image URL
export const getStrapiImageUrl = (imageData: any): string => {
    // Handle null or undefined imageData
    if (!imageData) return '';

    // Handle direct URL string
    if (typeof imageData === 'string') {
        return imageData.startsWith('http') ? imageData : `${STRAPI_API_URL.replace('/api', '')}${imageData}`;
    }

    // Handle Strapi image data structure
    if (!imageData?.data?.attributes?.url) return '';

    const url = imageData.data.attributes.url;

    // If URL is already absolute, return as is
    if (url.startsWith('http')) {
        return url;
    }

    // If URL is relative, prepend Strapi base URL
    const strapiBaseUrl = STRAPI_API_URL.replace('/api', '');
    return `${strapiBaseUrl}${url}`;
};

// Helper function to convert Strapi attraction to frontend format
export const convertStrapiAttraction = (strapiAttraction: Attraction) => {
    // Add null checks
    if (!strapiAttraction || !strapiAttraction.attributes) {
        console.error('Invalid Strapi attraction data:', strapiAttraction);
        throw new Error('Invalid attraction data received from Strapi');
    }

    const attrs = strapiAttraction.attributes;
    return {
        id: strapiAttraction.id,
        title: attrs.title || 'Untitled Attraction',
        rating: attrs.rating || 0,
        location: attrs.location || 'Unknown Location',
        duration: attrs.duration || 'Unknown Duration',
        price: attrs.price || '0 SEK',
        image: getStrapiImageUrl(attrs.image) || '/img/default-attraction.jpg',
        itemId: attrs.itemId || `attraction-${strapiAttraction.id}`,
        categoryId: attrs.categoryId || 'general',
        host: attrs.host || 'expedition-lapland.com',
        isSpecial: attrs.isSpecial || false,
        isLarge: attrs.isLarge || false,
        description: attrs.description || '',
        currency: attrs.currency || 'SEK',
        slug: attrs.slug || `attraction-${strapiAttraction.id}`,
    };
};