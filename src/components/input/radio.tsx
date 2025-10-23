import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './radio.css';
interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
function Radio({ label, name, id, ...rest }: RadioProps) {
  return (
    <div className="radio-wrapper">
      <input
        type="radio"
        className="radio-input"
        name={name}
        id={id}
        {...rest}
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
    </div>
  );
}

export default Radio;
