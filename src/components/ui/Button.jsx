import React from 'react';

const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const variantStyles = {
  primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 focus:ring-indigo-500/50",
  secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300/50",
  ghost: "bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500/50",
  danger: "bg-red-600 text-white shadow-lg shadow-red-500/30 hover:bg-red-700 focus:ring-red-500/50",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;