import React from 'react';
import { FaBus, FaMicrophone } from 'react-icons/fa';
import { MdAnnouncement } from 'react-icons/md';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" role="article">
      <div className="text-indigo-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16" aria-label="Özellikler">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaBus />}
            title="Gerçek Zamanlı Otobüs Tespiti"
            description="Yaklaşan otobüsleri ve hat numaralarını anında tespit eder"
          />
          <FeatureCard
            icon={<FaMicrophone />}
            title="Sesli Anonslar"
            description="Otobüs numaralarını ve varış noktalarını net bir şekilde seslendirir"
          />
          <FeatureCard
            icon={<MdAnnouncement />}
            title="Güzergah Bilgisi"
            description="Otobüs güzergahları ve duraklar hakkında detaylı bilgi sunar"
          />
        </div>
      </div>
    </section>
  );
}