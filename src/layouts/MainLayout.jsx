import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased flex flex-col">
      
      {/* Header Placeholder (Often a separate component, but included here for layout structure) */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            الموقع العصري
          </h1>
          <nav className="space-x-4 space-x-reverse">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">الرئيسية</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">الخدمات</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">اتصل بنا</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} الموقع العصري. جميع الحقوق محفوظة.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            تصميم وتطوير بواجهة مستخدم عصرية (Tailwind CSS)
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;