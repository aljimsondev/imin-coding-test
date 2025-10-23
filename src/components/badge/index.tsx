import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import './badge.css';

const badgeVariant = cva('badge', {
  variants: {
    theme: {
      secondary: 'badge-secondary',
      primary: 'badge-primary',
      'accent-rose': 'badge-rose',
      'accent-red': 'badge-red',
      'accent-blue': 'badge-blue',
    },
  },
  defaultVariants: {
    theme: 'primary',
  },
});

function Badge({
  title,
  theme,
  className,
  ...rest
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariant> & {
    title?: string;
  }) {
  return (
    <span {...rest} className={classNames(badgeVariant({ theme, className }))}>
      {title}
    </span>
  );
}

export default Badge;
