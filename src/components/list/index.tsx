import cn from 'classnames';
import { HTMLAttributes } from 'react';
import './list.css';

interface ListGroupProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
export function ListGroup({
  title,
  className,
  children,
  ...rest
}: ListGroupProps) {
  return (
    <div {...rest} className={cn('list-group', className)}>
      <p className="list-group-title">{title}</p>
      <div className="list-group-content">{children}</div>
    </div>
  );
}
