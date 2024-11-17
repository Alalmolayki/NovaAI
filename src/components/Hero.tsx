import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-16">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Toplu Taşımayı Herkes İçin Erişilebilir Kılıyoruz
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              NovaAI, yapay zeka teknolojisi ile görme engelli bireylerin toplu taşıma deneyimini güvenle yaşamalarını sağlar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                aria-label="Uygulamayı İndir"
              >
                Hemen Başla
              </button>
              <button 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
                aria-label="Daha Fazla Bilgi"
              >
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/ai-demo.pngA sample website was created." 
                alt="NovaAI otobüs tanıma sistemi demo" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}