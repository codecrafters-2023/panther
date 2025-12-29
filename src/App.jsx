import { useState, useEffect } from 'react';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
      {/* Subtle animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl w-full">
            <div className={`text-center space-y-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Holiday Message */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-200 rounded-full">
                <span className="text-2xl">🎉</span>
                <p className="text-sm font-medium text-orange-900">
                  Happy Holidays & Happy New Year!
                </p>
                <span className="text-2xl">🎊</span>
              </div>

              {/* Company Name */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                  Panther Express Inc.
                </h1>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
                  Coming Soon
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We're crafting a new digital experience. Our website will be launching soon with enhanced features and better service for you.
              </p>

              {/* Contact Cards */}
              <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Phone Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <a href="tel:7327664970" className="text-sm text-slate-600 hover:text-orange-600 transition-colors">
                    (732) 766-4970
                  </a>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <div className="space-y-1 text-sm text-slate-600">
                    <a href="mailto:pantherexpress95@gmail.com" className="block hover:text-orange-600 transition-colors truncate">
                      pantherexpress95@gmail.com
                    </a>
                    <a href="mailto:dispatch@pantherexpress.us" className="block hover:text-orange-600 transition-colors truncate">
                      dispatch@pantherexpress.us
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                  <address className="text-sm text-slate-600 not-italic">
                    657 Fireside Dr<br />Greenwood, IN 46143
                  </address>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 px-6">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Panther Express Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
