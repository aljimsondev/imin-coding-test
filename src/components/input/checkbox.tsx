import { HTMLAttributes } from 'react';
import './checkbox.css';

interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  name,
  id,
  checked,
  onChange,
  ...rest
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-input"
          name={name}
          id={id}
          checked={checked}
          onChange={handleChange}
          {...rest}
        />
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      </div>
    </>
  );
}
