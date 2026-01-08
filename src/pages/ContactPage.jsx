const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                        تواصل معنا
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا عبر النموذج أدناه أو المعلومات المتاحة.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information Section (Right Column on LTR, Left on RTL) */}
                    <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                            معلومات الاتصال
                        </h2>
                        <div className="space-y-6">
                            {/* Location */}
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="mr-4">
                                    <p className="text-lg font-medium text-gray-900">الموقع</p>
                                    <p className="text-gray-600">شارع الابتكار، مبنى 45، الرياض، المملكة العربية السعودية</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div className="mr-4">
                                    <p className="text-lg font-medium text-gray-900">البريد الإلكتروني</p>
                                    <p className="text-indigo-600 hover:text-indigo-700">info@yourcompany.com</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div className="mr-4">
                                    <p className="text-lg font-medium text-gray-900">الهاتف</p>
                                    <p className="text-gray-600">+966 50 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section (Left Column on LTR, Right on RTL) */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            أرسل لنا رسالة
                        </h2>
                        <form action="#" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Name */}
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
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                        placeholder="أدخل اسمك"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                        placeholder="example@domain.com"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    الموضوع
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                    placeholder="ما هو سبب تواصلك؟"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    الرسالة
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                    placeholder="اكتب رسالتك بالتفصيل..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                >
                                    إرسال الرسالة
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        موقعنا على الخريطة
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl border border-gray-300">
                        {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
                        <div className="flex items-center justify-center h-full text-gray-500 text-xl">
                            [خريطة تفاعلية للموقع]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;