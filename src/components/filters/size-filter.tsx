import Button from '@/components/button';
import { ProductSizes } from '@/types/product.type';
import './size-filter.css';

function SizeFilter({ options }: { options: ProductSizes }) {
  return (
    <div className="size-filter-wrapper">
      {options.map((filter) => {
        return (
          <Button
            key={filter.id}
            size="sm"
            variant="ghost"
            className="text-sm flex items-center justify-center"
          >
            {filter.size}
          </Button>
        );
      })}
    </div>
  );
}

export default SizeFilter;
