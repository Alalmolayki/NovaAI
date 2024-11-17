import React from 'react';

export default function CodeDemo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gelişmiş AI Teknolojisi</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-900 p-6 rounded-xl shadow-2xl overflow-hidden">
            <pre className="text-sm lg:text-base overflow-x-auto">
              <code className="language-python text-gray-100">
{`# AI Bus Detection System
import tensorflow as tf
from nova_ai import BusDetector

class NovaAIProcessor:
    def __init__(self):
        self.model = BusDetector()
        
    def process_frame(self, frame):
        # Detect buses in frame
        detections = self.model.detect(frame)
        
        # Extract bus numbers
        bus_info = self.model.extract_info(
            detections
        )
        
        return {
            'bus_number': bus_info.number,
            'route': bus_info.route,
            'eta': bus_info.arrival_time
        }`}
              </code>
            </pre>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Güçlü AI Altyapısı</h3>
            <p className="text-gray-600">
              NovaAI, en son teknoloji yapay zeka modelleri kullanarak gerçek zamanlı otobüs tespiti ve bilgi çıkarımı yapar. Sistemimiz sürekli öğrenir ve kendini geliştirir.
            </p>
            <ul className="space-y-3">
              {[
                'Gerçek zamanlı görüntü işleme',
                'Yüksek doğruluk oranı',
                'Düşük gecikme süresi',
                'Gürültü filtreleme'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}