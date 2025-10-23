'use client';

import { getProducts } from '@/_actions/get-products.action';
import Button from '@/components/button';
import ProductCard from '@/components/card/product.card';
import FilterMenu from '@/components/menu/filter.menu';
import SortingMenu from '@/components/menu/sorting.menu';
import Typography from '@/components/typography';
import { useFilterStore } from '@/store/filter.store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { VscSettings } from 'react-icons/vsc';
import './product.snippet.css';

function ProductSnippet() {
  const { sortOrder, sortBy, setOpenFilterMenu } = useFilterStore();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryFn: (lastPage) =>
      getProducts({ sortOrder: sortOrder, sortBy, page: lastPage.pageParam }),
    queryKey: [sortOrder, sortBy],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.pagination.has_next_page) return;
      return lastPage.pagination.next_page;
    },
  });

  const handleOpenFilterMenu = () => {
    setOpenFilterMenu(true);
  };

  const handleNextPage = () => {
    fetchNextPage();
  };

  const products = (data?.pages.flat() || []).map((d) => d.products).flat();

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
          <Button variant="outline" onClick={handleOpenFilterMenu}>
            <VscSettings />
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
      {hasNextPage && (
        <div className="product-snippet-pagination-wrapper">
          <Button
            variant="outline-destructive"
            size="lg"
            onClick={handleNextPage}
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
}

export default ProductSnippet;
