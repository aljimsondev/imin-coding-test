import Button from '@/components/button';
import ColorSelector from '@/components/button/color-sector';
import IconButton from '@/components/button/icon.button';
import MaterialFilter from '@/components/filters/material-filter';
import PriceFilter from '@/components/filters/price-filter';
import ProductCareFilter from '@/components/filters/product-care-filter';
import SizeFilter from '@/components/filters/size-filter';
import StyleFilter from '@/components/filters/style-filter';
import TypeFilter from '@/components/filters/type-filter';
import { ListGroup } from '@/components/list';
import { Portal } from '@/components/modal/portal';
import Separator from '@/components/separator';
import Typography from '@/components/typography';
import {
  braTypes,
  colorFilters,
  materials,
  productCare,
  sizes,
  styles,
} from '@/constants/filter';
import { useClickOutside } from '@/lib/hooks/use-click-outside';
import { useFilterStore } from '@/store/filter.store';
import { useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import './filter.menu.css';

function FilterMenu() {
  const { openFilterMenu, setOpenFilterMenu } = useFilterStore();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpenFilterMenu(false));

  return (
    <Portal open={openFilterMenu}>
      <aside className="filter-container" ref={ref}>
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
            onClick={() => setOpenFilterMenu(false)}
          />
        </div>
        <Separator />
        <div className="filter-menu-content">
          <ListGroup title="Bra Type">
            <TypeFilter options={braTypes} />
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
            <SizeFilter options={sizes} />
          </ListGroup>
          <ListGroup title="Style">
            <StyleFilter options={styles} />
          </ListGroup>
          <ListGroup title="Material">
            <MaterialFilter options={materials} />
          </ListGroup>
          <ListGroup title="Product Care">
            <ProductCareFilter options={productCare} />
          </ListGroup>
        </div>
        <Separator />
        <div className="filter-menu-footer">
          <Button
            variant="destructive"
            size="lg"
            className="apply_filter_button"
          >
            Apply
          </Button>
        </div>
      </aside>
    </Portal>
  );
}

export default FilterMenu;
