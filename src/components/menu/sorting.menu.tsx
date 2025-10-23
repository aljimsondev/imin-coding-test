import Button from '@/components/button';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownSection,
} from '@/components/dropdown';
import { useFilterStore } from '@/store/filter.store';
import { SortOrder } from '@/types/product.type';
import { IoChevronDown } from 'react-icons/io5';

function SortingMenu() {
  const { setSortOrder, openSortMenu, setOpenSortMenu } = useFilterStore();

  // update sort order
  const handleNameSortOrder = (sortOrder: SortOrder) => {
    setSortOrder(sortOrder);
  };
  return (
    <Dropdown
      open={openSortMenu}
      onOpenChange={setOpenSortMenu}
      align="right"
      trigger={
        <Button variant="outline">
          <IoChevronDown /> Sort By
        </Button>
      }
    >
      <DropdownSection title="Alphabetically">
        <DropdownItem onClick={() => handleNameSortOrder('asc')}>
          A-Z
        </DropdownItem>
        <DropdownItem onClick={() => handleNameSortOrder('desc')}>
          Z-A
        </DropdownItem>
      </DropdownSection>
      <DropdownDivider />
      <DropdownSection title="Price Range">
        <DropdownItem onClick={() => {}}>Under $50</DropdownItem>
        <DropdownItem onClick={() => {}}>$50 - $100</DropdownItem>
        <DropdownItem onClick={() => {}}>Over $100</DropdownItem>
      </DropdownSection>
    </Dropdown>
  );
}

export default SortingMenu;
