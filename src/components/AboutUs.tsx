import React from 'react';
import { FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hakkımızda</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <FaUsers className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Takımımız</h3>
            <p className="text-gray-600">
              Görme engelli bireylerin hayatını kolaylaştırmak için çalışan tutkulu mühendisler ve tasarımcılardan oluşan ekibimiz.
            </p>
          </div>
          
          <div className="text-center p-6">
            <FaLightbulb className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Misyonumuz</h3>
            <p className="text-gray-600">
              Yapay zeka teknolojisini kullanarak toplu taşımayı herkes için erişilebilir kılmak.
            </p>
          </div>
          
          <div className="text-center p-6">
            <FaHeart className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Değerlerimiz</h3>
            <p className="text-gray-600">
              Kapsayıcılık, yenilikçilik ve kullanıcı odaklı tasarım prensipleriyle hareket ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}