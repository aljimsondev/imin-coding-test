import Input from '@/components/input/input';
import RangeSlider from '@/components/input/range';
import Separator from '@/components/separator';
import Typography from '@/components/typography';
import { currencyFormatter } from '@/lib/utils/currency-formatter';
import { ChangeEvent, useState } from 'react';
import './price-filter.css';

// filter price component
interface PriceFilterProps {
  maxPriceRange: number;
  minPriceRange: number;
}
export default function PriceFilter({
  maxPriceRange,
  minPriceRange,
}: PriceFilterProps) {
  const [startValue, setStartValue] = useState(minPriceRange);
  const [endValue, setEndValue] = useState(maxPriceRange);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // handle input change here
  };

  return (
    <div>
      <div className="flex items-center">
        <Input
          value={currencyFormatter(startValue)}
          onChange={handleInputChange}
        />
        <Separator className="price-input-separator" />
        <Input
          value={currencyFormatter(endValue)}
          onChange={handleInputChange}
        />
      </div>
      <RangeSlider
        max={maxPriceRange}
        min={minPriceRange}
        onMaxValueChange={(val) => setEndValue(val)}
        onMinValueChange={(val) => setStartValue(val)}
      />

      <div className="flex items-center">
        <Typography variant="small" className="text-muted">
          Price:{' '}
          <strong className="text-muted font-bold text-primary">
            {currencyFormatter(startValue)} - {currencyFormatter(endValue)}
          </strong>
        </Typography>
      </div>
    </div>
  );
}
