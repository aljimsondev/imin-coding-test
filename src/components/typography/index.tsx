import { cva, VariantProps } from 'class-variance-authority';
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
  ...rest
}: React.ComponentProps<'button'> &
  VariantProps<typeof typographyVariant> & {
    component: TypographyVariant;
  }) {
  // Use custom element if provided, otherwise use variant mapping
  const Comp = component as React.ElementType;

  return (
    <Comp {...rest} className={typographyVariant({ variant, className })} />
  );
}

export default Typography;
