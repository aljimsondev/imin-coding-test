import { FilterStoreProvider } from '@/store/filter.store';
import { ReactNode } from 'react';

function AppStoreProvider({ children }: { children: ReactNode }) {
  return <FilterStoreProvider>{children}</FilterStoreProvider>;
}

export default AppStoreProvider;
