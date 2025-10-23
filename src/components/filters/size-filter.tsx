import Button from '@/components/button';
import { sizeFilters } from '@/constants/filter';
import './size-filter.css';

function SizeFilter() {
  return (
    <div className="size-filter-wrapper">
      {sizeFilters.map((filter) => {
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
