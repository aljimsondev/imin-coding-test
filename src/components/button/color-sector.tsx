import { cva, VariantProps } from 'class-variance-authority';
import cn from 'classnames';
import './color-selector.css';

const colorSelectVariant = cva('', {
  variants: {
    size: {
      default: 'selector-base',
      sm: 'selector-sm',
      lg: 'selector-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

function ColorSelector({
  color,
  value = '',
  size = 'default',
  className,
  ...rest
}: React.ComponentProps<'button'> &
  VariantProps<typeof colorSelectVariant> & {
    color: string;
  }) {
  const active = value === color;
  console.log(color);
  return (
    <div
      className={cn('color-selector-wrapper', active ? 'active-selector' : '')}
    >
      <button
        className={cn(
          'color-selector',
          colorSelectVariant({ size, className }),
        )}
        style={{ background: color }}
        {...rest}
      />
    </div>
  );
}

export default ColorSelector;
