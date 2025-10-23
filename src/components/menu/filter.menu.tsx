import ColorSelector from '@/components/button/color-sector';
import IconButton from '@/components/button/icon.button';
import PriceFilter from '@/components/filters/price-filter';
import SizeFilter from '@/components/filters/size-filter';
import Radio from '@/components/input/radio';
import { ListGroup } from '@/components/list';
import { Portal } from '@/components/modal/portal';
import Separator from '@/components/separator';
import Typography from '@/components/typography';
import { braTypeFilters, colorFilters } from '@/constants/filter';
import { useFilterStore } from '@/store/filter.store';
import { MdOutlineClose } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import './filter.menu.css';

function FilterMenu() {
  const { openFilterMenu, setOpenFilterMenu } = useFilterStore();
  return (
    <Portal open={true} onOpenChange={setOpenFilterMenu}>
      <aside className="filter-container">
        <div className="filter-header">
          <div className="filter-header-title">
            <VscSettings size={20} />
            <Typography className="uppercase" variant="h4">
              Filter
            </Typography>
          </div>
          <IconButton
            icon={MdOutlineClose}
            iconProps={{ size: 24 }}
            variant="ghost"
          />
        </div>
        <Separator />
        <div className="filter-menu-content">
          <ListGroup title="Bra Type">
            {braTypeFilters.map((type, index) => (
              <Radio
                name="bra_type"
                id={type.name}
                checked={index === 1}
                label={type.name}
                key={type.id}
                onChange={() => {}} // manage check handler here
              />
            ))}
          </ListGroup>
          <ListGroup title="Price">
            <PriceFilter maxPriceRange={200000} minPriceRange={0} />
          </ListGroup>
          <ListGroup title="Color">
            <div className="flex items-center justify-evenly">
              {colorFilters.map((filter) => (
                <ColorSelector
                  color={filter.color}
                  key={filter.id}
                  value="#DFDBD8"
                />
              ))}
            </div>
          </ListGroup>
          <ListGroup title="Size">
            <SizeFilter />
          </ListGroup>
        </div>
      </aside>
    </Portal>
  );
}

export default FilterMenu;
