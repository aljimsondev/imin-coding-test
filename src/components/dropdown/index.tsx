import { ReactNode, useEffect, useRef, useState } from 'react';
import './dropdown.css';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
}

function Dropdown({ trigger, children, align = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && <div className={`dropdown-content ${align}`}>{children}</div>}
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
