import React from 'react';

const Input = React.forwardRef(
  ({ className, type = 'text', label, id, ...props }, ref) => {
    const inputId = id || props.name;

    // Base classes for a modern, accessible input field
    const baseClasses = 
      "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm transition-colors " +
      "file:border-0 file:bg-transparent file:text-sm file:font-medium " +
      "placeholder:text-gray-400 " +
      "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none " +
      "disabled:cursor-not-allowed disabled:opacity-50";

    return (
      <div className="flex flex-col w-full">
        {label && inputId && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium text-gray-700 mb-1 block select-none"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={`${baseClasses} ${className || ''}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;