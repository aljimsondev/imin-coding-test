'use client';

import Button from '@/components/button';
import ProductCard from '@/components/card/product.card';
import SortingMenu from '@/components/menu/sorting.menu';
import Typography from '@/components/typography';
import products from '@/temp/products.json';
import { VscSettings } from 'react-icons/vsc';
import './product.snippet.css';

function getProducts() {
  return products;
}

function ProductSnippet() {
  const products = getProducts();

  return (
    <section className="snippet container ">
      <div className="snippet-header">
        <div className="title-wrapper">
          <Typography component="h3" variant="h2" className="uppercase">
            Product
          </Typography>
          <Typography variant="p" className="text-muted">
            Showing search results for &apos;Bra&apos;(88)
          </Typography>
        </div>
        <div className="filter">
          <Button variant="outline">
            <VscSettings className="text- " />
            Filter
          </Button>
          <SortingMenu />
        </div>
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
