const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center max-w-lg w-full bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 sm:p-12 transition-all duration-300 transform hover:scale-[1.02]">
        
        {/* Large Error Code */}
        <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 animate-pulse">
          404
        </h1>
        
        {/* Main Message */}
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          الصفحة غير موجودة
        </h2>
        
        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.
        </p>
        
        {/* Call to Action Button */}
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
        >
          العودة إلى الصفحة الرئيسية
          <svg 
            className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 transform rotate-180 rtl:rotate-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </a>
        
        {/* Footer Note */}
        <div className="mt-8 text-sm text-gray-400 dark:text-gray-500">
          <p>إذا كنت تعتقد أن هذا خطأ، يرجى الاتصال بالدعم.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;