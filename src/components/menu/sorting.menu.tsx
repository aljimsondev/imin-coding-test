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
import { MdOutlineCheck } from 'react-icons/md';

function SortingMenu() {
  const { setSortOrder, openSortMenu, setOpenSortMenu, sortOrder } =
    useFilterStore();

  // update sort order
  const handleNameSortOrder = (sortOrder: SortOrder) => {
    setSortOrder(sortOrder);
    setOpenSortMenu(false); // close the menu when selecting the menu item
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
        <DropdownItem
          className="flex items-center justify-between"
          onClick={() => handleNameSortOrder('asc')}
        >
          A-Z {sortOrder === 'asc' && <MdOutlineCheck size={24} />}
        </DropdownItem>
        <DropdownItem
          className="flex items-center justify-between"
          onClick={() => handleNameSortOrder('desc')}
        >
          Z-A {sortOrder === 'desc' && <MdOutlineCheck size={24} />}
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
