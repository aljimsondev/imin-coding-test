import { cva, VariantProps } from 'class-variance-authority';
import cn from 'classnames';
import React from 'react';

const typographyVariant = cva('', {
  variants: {
    variant: {
      p: 'text-base',
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-medium',
      h6: 'text-base font-medium',
      small: 'text-sm',
    },
    color: {
      primary: 'text-primary',
      base: 'text-secondary',
      muted: 'muted',
      'accent-red': 'text-accent-red',
      'accent-blue': 'text-accent-blue',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

// Map variants to HTML elements
type VariantElementMap = {
  p: 'p';
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
  small: 'small';
};

type TypographyVariant = keyof VariantElementMap;

function Typography({
  className,
  variant,
  component = 'p',
  color,
  ...rest
}: React.ComponentProps<'button'> &
  VariantProps<typeof typographyVariant> & {
    component?: TypographyVariant;
  }) {
  // Use custom element if provided, otherwise use variant mapping
  const Comp = component as React.ElementType;

  return (
    <Comp
      {...rest}
      className={cn(typographyVariant({ variant, color, className }))}
    />
  );
}

export default Typography;
