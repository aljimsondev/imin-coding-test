import cn from 'classnames';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Input({ className, ...rest }: InputProps) {
  return <input className={cn('input', className)} {...rest} />;
}

export default Input;
