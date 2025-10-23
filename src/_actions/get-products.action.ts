'use server';

import { products } from '@/temp/products';
import { Product, SortBy, SortOrder } from '@/types/product.type';

/**
 * A server action that handles the fetching of data
 */
export async function getProducts({
  sortOrder,
  sortBy,
  page = 1,
  limit = 12,
}: {
  sortOrder: SortOrder;
  sortBy: SortBy;
  page: number;
  limit?: number;
}) {
  function applyFilter() {
    switch (sortBy) {
      case 'name':
        return applyNameFilter;
      default:
        return applyPriceFilter;
    }
  }

  // Use Math.ceil to include partial pages
  const totalPages = Math.ceil(products.length / limit);

  // Calculate pagination indices
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const result = products
    .sort((a, b) => applyFilter()(a, b, sortOrder))
    .slice(startIndex, endIndex);

  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    products: result,
    pagination: {
      page: page,
      prev_page: hasPrevPage ? page - 1 : null,
      next_page: hasNextPage ? page + 1 : null,
      limit: limit,
      has_prev_page: hasPrevPage,
      has_next_page: hasNextPage,
      total_pages: totalPages,
      total_items: products.length,
    },
  };
}
// apply name filter
function applyNameFilter(
  productA: Product,
  productB: Product,
  sortOrder: SortOrder,
) {
  return sortOrder === 'asc'
    ? productA.product_name
        .toLowerCase()
        .localeCompare(productB.product_name.toLowerCase()) // A-Z
    : productB.product_name
        .toLowerCase()
        .localeCompare(productA.product_name.toLowerCase()); // Z-A
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
