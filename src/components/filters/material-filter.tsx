import Checkbox from '@/components/input/checkbox';
import { Materials } from '@/types/product.type';

function MaterialFilter({ options }: { options: Materials }) {
  return options.map((filter) => {
    return (
      <Checkbox
        label={filter.material}
        id={`material-${filter.id}`}
        key={filter.id}
      />
    );
  });
}

export default MaterialFilter;
