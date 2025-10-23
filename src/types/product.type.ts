import {
  braTypes,
  materials,
  productCare,
  sizes,
  styles,
} from '@/constants/filter';
import { products } from '@/temp/products';

export type Product = (typeof products)[number];

export type SortOrder = 'desc' | 'asc';
export type SortBy = 'name' | 'price';

export type Materials = typeof materials;

export type ProductCareType = typeof productCare;
export type BraTypes = typeof braTypes;
export type ProductStyles = typeof styles;
export type ProductSizes = typeof sizes;
