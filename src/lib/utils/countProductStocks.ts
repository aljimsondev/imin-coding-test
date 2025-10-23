import { Product } from '@/temp/products';

/**
 * Count the total stocks of product variants
 * NOTE: This utility only supports the current hardcoded products
 * @param skus
 * @returns
 */
export const countProducStocks = (skus: Product['skus']) => {
  const stocks = skus.reduce((acc, sku) => {
    return (acc += sku.sku_variant_qty);
  }, 0);

  return stocks;
};
