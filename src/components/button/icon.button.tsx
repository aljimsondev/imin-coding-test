import { cva, VariantProps } from 'class-variance-authority';
import cn from 'classnames';
import { createElement } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import './icon.css';

const iconButtonVariants = cva('icon-button', {
  variants: {
    variant: {
      default: 'icon-button-primary',
      'accent-red': 'icon-button-accent-red',
      ghost: 'icon-button-ghost',
    },
    size: {
      default: 'icon-button-base',
      // You can add other variant here
      // sm: 'button-sm',
      // lg: 'button-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function IconButton({
  size,
  className,
  variant,
  icon,
  iconProps,
  ...rest
}: React.ComponentProps<'button'> &
  VariantProps<typeof iconButtonVariants> & {
    icon: IconType;
    iconProps?: IconBaseProps;
  }) {
  return (
    <button
      className={cn(iconButtonVariants({ className, size, variant }))}
      {...rest}
    >
      {createElement(icon, { ...iconProps })}
    </button>
  );
}

export default IconButton;
