import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 ease-in-out">
        
        {/* Left Side: Branding/Visual (Hidden on small screens) */}
        <div className="hidden md:flex md:w-1/2 lg:w-2/5 bg-indigo-600 dark:bg-indigo-700 p-10 text-white items-center justify-center relative overflow-hidden">
          
          {/* Subtle background pattern/shape */}
          <svg className="absolute top-0 right-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,100" fill="currentColor" className="text-indigo-700 dark:text-indigo-800" />
          </svg>

          <div className="z-10 text-center">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">
              Welcome Back
            </h1>
            <p className="text-indigo-200 text-lg mt-2">
              Access your dashboard and manage your account securely.
            </p>
            
            {/* Placeholder for a logo or icon */}
            <div className="mt-10">
                <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 110 4m-2 10a2 2 0 104 0m-2-4a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1z"></path></svg>
            </div>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-1/2 lg:w-3/5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          
          {/* Mobile Logo/Title (if needed) */}
          <div className="md:hidden text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              App Name
            </h2>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;