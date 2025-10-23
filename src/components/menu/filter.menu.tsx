import { Modal } from '@/components/modal';
import { useState } from 'react';

function FilterMenu() {
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <aside>FilterMenu</aside>
    </Modal>
  );
}

export default FilterMenu;
