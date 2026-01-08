const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        shadow-xl dark:shadow-2xl 
        rounded-xl 
        border border-gray-100 dark:border-gray-700 
        transition-all duration-300 
        hover:shadow-2xl dark:hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`p-6 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`p-4 border-t border-gray-100 dark:border-gray-700 flex justify-end ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter };