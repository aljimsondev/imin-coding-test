'use server';

import { products } from '@/temp/products';
import { Product, SortBy, SortOrder } from '@/types/product.type';

/**
 * A server action that handles the fetching of data
 */
export async function getProducts({
  sortOrder,
  sortBy,
}: {
  sortOrder: SortOrder;
  sortBy: SortBy;
}) {
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

  // apply price filter
  function applyPriceFilter(
    productA: Product,
    productB: Product,
    sortOrder: SortOrder,
  ) {
    // when product_compare_at_price is present it will become the new current price and disregard the discounted price
    const productACurrentPrice = productA.product_retail_price!;
    const productBCurrentPrice = productB.product_retail_price!;

    return sortOrder === 'asc'
      ? productACurrentPrice - productBCurrentPrice // Low to High
      : productBCurrentPrice - productACurrentPrice; // High to Low
  }

  function applyFilter() {
    switch (sortBy) {
      case 'name':
        return applyNameFilter;
      default:
        return applyPriceFilter;
    }
  }

  return products.sort((a, b) => applyFilter()(a, b, sortOrder));
}
