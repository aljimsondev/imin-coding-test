import Button from '@/components/button';
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownSection,
} from '@/components/dropdown';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

function SortingMenu() {
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  return (
    <Dropdown
      align="right"
      trigger={
        <Button variant="outline">
          <IoChevronDown /> Sort By
        </Button>
      }
    >
      <DropdownSection title="Alphabetically">
        <DropdownItem onClick={() => setSelectedFilter('Electronics')}>
          A-Z
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedFilter('Clothing')}>
          Z-A
        </DropdownItem>
      </DropdownSection>
      <DropdownDivider />
      <DropdownSection title="Price Range">
        <DropdownItem onClick={() => setSelectedFilter('Under $50')}>
          Under $50
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedFilter('$50 - $100')}>
          $50 - $100
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedFilter('Over $100')}>
          Over $100
        </DropdownItem>
      </DropdownSection>
    </Dropdown>
  );
}

export default SortingMenu;
