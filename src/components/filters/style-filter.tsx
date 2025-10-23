import Checkbox from '@/components/input/checkbox';
import { ProductStyles } from '@/types/product.type';

export default function StyleFilter({ options }: { options: ProductStyles }) {
  return options.map((filter) => {
    return (
      <Checkbox
        label={filter.style}
        id={`style-${filter.id}`}
        key={filter.id}
      />
    );
  });
}
