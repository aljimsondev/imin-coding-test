import Button from '@/components/button';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownSection,
} from '@/components/dropdown';
import { useFilterStore } from '@/store/filter.store';
import { SortBy, SortOrder } from '@/types/product.type';
import { IoChevronDown } from 'react-icons/io5';
import { MdOutlineCheck } from 'react-icons/md';

function SortingMenu() {
  const {
    setSortOrder,
    openSortMenu,
    setOpenSortMenu,
    setSortBy,
    sortBy,
    sortOrder,
  } = useFilterStore();

  // update sort order
  const handleNameSortOrder = (sortBy: SortBy, sortOrder: SortOrder) => {
    setSortOrder(sortOrder); // update sort order
    setSortBy(sortBy); // update the sort target property
    setOpenSortMenu(false); // close the menu when selecting the menu item
  };

  // name order
  const nameAscendingOrder = sortBy === 'name' && sortOrder === 'asc';
  const nameDescendingOrder = sortBy === 'name' && sortOrder === 'desc';

  // price order
  const priceAscendingOrder = sortBy === 'price' && sortOrder === 'asc';
  const priceDescendingOrder = sortBy === 'price' && sortOrder === 'desc';

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
          onClick={() => handleNameSortOrder('name', 'asc')}
        >
          A-Z {nameAscendingOrder && <MdOutlineCheck size={24} />}
        </DropdownItem>
        <DropdownItem
          className="flex items-center justify-between"
          onClick={() => handleNameSortOrder('name', 'desc')}
        >
          Z-A {nameDescendingOrder && <MdOutlineCheck size={24} />}
        </DropdownItem>
      </DropdownSection>
      <DropdownDivider />
      <DropdownSection title="Price Range">
        <DropdownItem
          className="flex items-center justify-between"
          onClick={() => handleNameSortOrder('price', 'asc')}
        >
          Low to High {priceAscendingOrder && <MdOutlineCheck size={24} />}
        </DropdownItem>
        <DropdownItem
          className="flex items-center justify-between"
          onClick={() => handleNameSortOrder('price', 'desc')}
        >
          High to Low {priceDescendingOrder && <MdOutlineCheck size={24} />}
        </DropdownItem>
      </DropdownSection>
    </Dropdown>
  );
}

export default SortingMenu;
