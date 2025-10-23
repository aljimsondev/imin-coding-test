import Checkbox from '@/components/input/checkbox';
import { ProductCareType } from '@/types/product.type';

function ProductCareFilter({ options }: { options: ProductCareType }) {
  return options.map((filter) => {
    return (
      <Checkbox
        label={filter.product_care}
        id={`product_care-${filter.id}`}
        key={filter.id}
      />
    );
  });
}

export default ProductCareFilter;
