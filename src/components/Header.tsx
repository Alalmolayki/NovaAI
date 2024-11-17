import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaGlobe } from 'react-icons/fa';

export default function Header() {
  const [language, setLanguage] = useState('EN');

  return (
    <header className="bg-indigo-700 text-white py-6 sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between" role="navigation">
          <h1 className="text-2xl font-bold">NovaAI</h1>
          
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-indigo-200 transition-colors">Hakkımızda</a>
            <a href="#contact" className="hover:text-indigo-200 transition-colors">İletişim</a>
            
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
                <FaGlobe />
                {language}
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-indigo-100' : ''
                      } text-gray-900 group flex w-full items-center rounded-md px-2 py-2`}
                      onClick={() => setLanguage('EN')}
                    >
                      English
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-indigo-100' : ''
                      } text-gray-900 group flex w-full items-center rounded-md px-2 py-2`}
                      onClick={() => setLanguage('TR')}
                    >
                      Türkçe
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            <button 
              className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Download NovaAI App"
            >
              Uygulamayı İndir
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}