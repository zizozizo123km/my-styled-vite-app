import React from 'react';

const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm whitespace-nowrap";

const variantClasses = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white active:bg-indigo-800",
  secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-white active:bg-gray-100",
  ghost: "bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 focus:ring-offset-white active:bg-indigo-100 shadow-none border border-transparent",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 focus:ring-offset-white active:bg-red-800",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

/**
 * A versatile button component styled with Tailwind CSS.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {function} [props.onClick] - Click handler.
 * @param {'primary' | 'secondary' | 'ghost' | 'danger'} [props.variant='primary'] - The visual style of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the button.
 * @param {string} [props.className=''] - Additional custom classes.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button type.
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) => {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;