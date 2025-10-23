import { cva, VariantProps } from 'class-variance-authority';
import './button.css';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      default: 'button-primary',
      destructive: 'button-destructive',
      outline: 'button-outline',
      secondary: 'button-secondary',
      'outline-destructive': 'button-outline-destructive',
    },
    size: {
      default: 'button-default',
      sm: 'button-sm',
      lg: 'button-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  size,
  className,
  variant,
  ...rest
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {}) {
  return (
    <button
      className={buttonVariants({ size, variant, className })}
      {...rest}
    />
  );
}

export default Button;
