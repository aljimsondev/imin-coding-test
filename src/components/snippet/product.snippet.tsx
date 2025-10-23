'use client';

import { getProducts } from '@/_actions/get-products.action';
import Button from '@/components/button';
import ProductCard from '@/components/card/product.card';
import FilterMenu from '@/components/menu/filter.menu';
import SortingMenu from '@/components/menu/sorting.menu';
import Typography from '@/components/typography';
import { useFilterStore } from '@/store/filter.store';
import { useQuery } from '@tanstack/react-query';
import { VscSettings } from 'react-icons/vsc';
import './product.snippet.css';

function ProductSnippet() {
  const { sortOrder } = useFilterStore();
  const { data: products = [] } = useQuery({
    queryFn: () => getProducts({ sortOrder: sortOrder }),
    queryKey: [sortOrder],
  });

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
          <FilterMenu />
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
