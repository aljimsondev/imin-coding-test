import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      destructive: '',
      outline: '',
      secondary: '',
      ghost: '',
      link: '',
    },
    size: {
      default: '',
      sm: '',
      lg: '',
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
