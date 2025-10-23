import { Dispatch, ReactNode, SetStateAction } from 'react';
import './dropdown.css';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  open?: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

function Dropdown({
  trigger,
  open,
  onOpenChange,
  children,
  align = 'left',
}: DropdownProps) {
  return (
    <div className="dropdown">
      <div onClick={() => onOpenChange((prev) => !prev)}>{trigger}</div>
      {open && <div className={`dropdown-content ${align}`}>{children}</div>}
    </div>
  );
}

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

function DropdownItem({ children, onClick }: DropdownItemProps) {
  return (
    <>
      <div className="dropdown-item" onClick={onClick}>
        {children}
      </div>
    </>
  );
}

function DropdownDivider() {
  return <div className="dropdown-divider" />;
}

interface DropdownSectionProps {
  title: string;
  children: ReactNode;
}

function DropdownSection({ title, children }: DropdownSectionProps) {
  return (
    <div className="dropdown-section">
      <div className="section-title">{title}</div>
      {children}
    </div>
  );
}

export { Dropdown, DropdownDivider, DropdownItem, DropdownSection };
