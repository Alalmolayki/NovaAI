import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Bize Ulaşın</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600 w-5 h-5" />
                  <span>info@novaai.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaPhone className="text-indigo-600 w-5 h-5" />
                  <span>+90 (212) 555 0123</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-indigo-600 w-5 h-5" />
                  <span>Teknopark İstanbul, Pendik, İstanbul</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Çalışma Saatleri</h4>
                <p className="text-gray-600">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi - Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}