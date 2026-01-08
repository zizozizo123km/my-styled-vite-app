const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            تواصل معنا
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            نحن هنا للإجابة على أسئلتك ومساعدتك في أي استفسار.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Section */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                معلومات الاتصال
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-lg font-medium text-gray-900">الموقع</p>
                    <p className="text-gray-600">شارع الابتكار، مبنى 101، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-lg font-medium text-gray-900">الهاتف</p>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-lg font-medium text-gray-900">البريد الإلكتروني</p>
                    <p className="text-indigo-600 hover:text-indigo-700">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links (Optional) */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                    تابعنا
                </h2>
                <div className="flex space-x-4 rtl:space-x-reverse">
                    {/* Placeholder for Social Icons */}
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* Facebook Icon Path */}
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.569V12h3.29l-.523 3.01h-2.767v7.044C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* Twitter Icon Path */}
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.717v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-indigo-600 transition duration-300">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {/* LinkedIn Icon Path */}
                            <path fillRule="evenodd" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.62c0-3.36-4-3.28-4 0V19h-3V8h3v1.765c1.39-2.63 7-2.48 7 3.14V19z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              أرسل لنا رسالة
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                  placeholder="اكتب رسالتك هنا..."
                  defaultValue={""}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map Section (Optional) */}
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                موقعنا على الخريطة
            </h2>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
                <div className="aspect-w-16 aspect-h-9 h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.708078000001!2d46.675296!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e7999!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;