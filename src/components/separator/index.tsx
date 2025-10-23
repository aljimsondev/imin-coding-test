import cn from 'classnames';
import { HTMLAttributes } from 'react';
import './separator.css';

function Separator({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('separator', className)} {...rest} />;
}

export default Separator;
