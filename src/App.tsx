import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeDemo />
        <AboutUs />
        <ContactUs />
      </main>

      <footer className="bg-gray-900 text-white py-8" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NovaAI</h3>
              <p className="text-gray-400">
                Yapay zeka ile toplu taşımayı herkes için erişilebilir kılıyoruz.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">İletişim</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kullanım Koşulları</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">İletişim</h3>
              <p className="text-gray-400">info@novaai.com</p>
              <p className="text-gray-400">+90 (212) 555 0123</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">&copy; 2024 NovaAI. Tüm hakları saklıdır.</p>
              <p className="text-gray-400">Ala Almolayki tarafından hazırlanmıştır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;