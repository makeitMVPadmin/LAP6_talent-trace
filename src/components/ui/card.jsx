import PropTypes from 'prop-types';
import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-card text-card-foreground shadow pt-10 pb-[150px] pr-4 pl-4',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';
Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6 -mb-4', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';
CardTitle.propTypes = {
  className: PropTypes.string,
};

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';
CardDescription.propTypes = {
  className: PropTypes.string,
};

const CardCharacterLimit = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-muted-foreground text-right', className)}
    {...props}
  />
));
CardCharacterLimit.displayName = 'CardCharacterLimit';
CardCharacterLimit.propTypes = {
  className: PropTypes.string,
};

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';
CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
CardFooter.propTypes = {
  className: PropTypes.string,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardCharacterLimit,
  CardContent,
};
