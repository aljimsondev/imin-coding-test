import cn from 'classnames';
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';
import './dropdown.css';

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
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
  className,
  ...rest
}: DropdownProps) {
  return (
    <div className={cn('dropdown', className)} {...rest}>
      <div onClick={() => onOpenChange((prev) => !prev)}>{trigger}</div>
      {open && <div className={`dropdown-content ${align}`}>{children}</div>}
    </div>
  );
}

interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClick?: () => void;
}

function DropdownItem({
  children,
  onClick,
  className,
  ...rest
}: DropdownItemProps) {
  return (
    <>
      <div
        className={cn('dropdown-item', className)}
        onClick={onClick}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}

function DropdownDivider() {
  return <div className="dropdown-divider" />;
}

interface DropdownSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

function DropdownSection({
  title,
  children,
  className,
  ...rest
}: DropdownSectionProps) {
  return (
    <div className={cn('dropdown-section', className)} {...rest}>
      <div className="section-title">{title}</div>
      {children}
    </div>
  );
}

export { Dropdown, DropdownDivider, DropdownItem, DropdownSection };
