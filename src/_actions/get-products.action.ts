'use server';

import { products } from '@/temp/products';
import { Product, SortOrder } from '@/types/product.type';

/**
 * A server action that handles the fetching of data
 */
export async function getProducts({ sortOrder }: { sortOrder: SortOrder }) {
  // apply name filter
  function applyNameFilter(
    productA: Product,
    productB: Product,
    sortOrder: SortOrder,
  ) {
    return sortOrder === 'asc'
      ? productA.product_name.localeCompare(productB.product_name) // A-Z
      : productB.product_name.localeCompare(productA.product_name); // Z-A
  }

  return products.sort((a, b) => applyNameFilter(a, b, sortOrder));
}
