import { Product } from '@/temp/products';

export function constructProductColorsAvailable(skus: Product['skus']) {
  const colors = skus.map((sku) => sku.sku_variant_colour) || [];
  const haveManyColours = colors.length > 1;

  if (haveManyColours) return `${colors[0]} + ${colors.length - 1} colours!`;

  return colors[0];
}
