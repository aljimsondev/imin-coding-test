'use client';

import { SortBy, SortOrder } from '@/types/product.type';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface FilterStoreState {
  openSortMenu: boolean;
  setOpenSortMenu: Dispatch<SetStateAction<boolean>>;

  // filter menu state
  openFilterMenu: boolean;
  setOpenFilterMenu: Dispatch<SetStateAction<boolean>>;

  // sort target state
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;

  // sort order state
  sortOrder: SortOrder;
  setSortOrder: (sortOrder: SortOrder) => void;

  category: string | null;
  priceRange: string | null;
  setCategory: (category: string | null) => void;
  setPriceRange: (priceRange: string | null) => void;

  clearFilters: () => void;
}

const FilterStoreContext = createContext<FilterStoreState | undefined>(
  undefined,
);

interface FilterStoreProviderProps {
  children: ReactNode;
}

export function FilterStoreProvider({ children }: FilterStoreProviderProps) {
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [sortBy, setSortBy] = useState<SortBy>('name');

  const clearFilters = () => {
    setCategory(null);
    setPriceRange(null);
    setSortOrder('asc');
  };

  const value: FilterStoreState = {
    category,
    priceRange,
    sortOrder,
    setCategory,
    setPriceRange,
    setSortOrder,
    // reset filter handler
    clearFilters,

    // menu state controller
    openSortMenu,
    setOpenSortMenu,

    // filter menu state controller
    openFilterMenu,
    setOpenFilterMenu,

    // sort by state controller
    sortBy,
    setSortBy,
  };

  return (
    <FilterStoreContext.Provider value={value}>
      {children}
    </FilterStoreContext.Provider>
  );
}

export function useFilterStore() {
  const context = useContext(FilterStoreContext);
  if (context === undefined) {
    throw new Error('useFilterStore must be used within a FilterStoreProvider');
  }
  return context;
}
