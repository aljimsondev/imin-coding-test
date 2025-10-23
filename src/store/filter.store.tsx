'use client';

import { SortOrder } from '@/types/product.type';
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

  sortBy: string | null;
  sortOrder: SortOrder;
  category: string | null;
  priceRange: string | null;
  setSortBy: (sortBy: string | null) => void;
  setCategory: (category: string | null) => void;
  setPriceRange: (priceRange: string | null) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
  clearFilters: () => void;
}

const FilterStoreContext = createContext<FilterStoreState | undefined>(
  undefined,
);

interface FilterStoreProviderProps {
  children: ReactNode;
}

export function FilterStoreProvider({ children }: FilterStoreProviderProps) {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);

  const clearFilters = () => {
    setSortBy(null);
    setCategory(null);
    setPriceRange(null);
    setSortOrder('asc');
  };

  const value: FilterStoreState = {
    sortBy,
    category,
    priceRange,
    setSortBy,
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
