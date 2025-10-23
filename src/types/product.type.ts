import { products } from '@/temp/products';

export type Product = (typeof products)[number];

export type SortOrder = 'desc' | 'asc';
