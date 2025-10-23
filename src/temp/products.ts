import productJSON from './products.json';

export type Product = (typeof productJSON)[number];

export const products = productJSON;
