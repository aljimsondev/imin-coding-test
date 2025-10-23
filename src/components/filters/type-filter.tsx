import Radio from '@/components/input/radio';
import { BraTypes } from '@/types/product.type';

function TypeFilter({ options }: { options: BraTypes }) {
  return options.map((type, index) => (
    <Radio
      name="bra_type"
      id={type.name}
      checked={index === 1}
      label={type.name}
      key={type.id}
      onChange={() => {}} // manage check handler here
    />
  ));
}

export default TypeFilter;
