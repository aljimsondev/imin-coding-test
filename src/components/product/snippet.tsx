'use client';

import ProductCard from '@/components/product/card/product.card';
import Typography from '@/components/typography';
import products from '@/temp/products.json';
import './snippet.css';

function getProducts() {
  return products;
}

function ProductSnippet() {
  const products = getProducts();

  return (
    <section className="container">
      <div>
        <Typography component="h3" variant="h3" className="uppercase">
          Product
        </Typography>
        <Typography variant="p" className="text-muted">
          Showing search results for &apos;Bra&apos;(88)
        </Typography>
      </div>
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard product={product} key={product.product_id} />
        ))}
      </div>
    </section>
  );
}

export default ProductSnippet;
