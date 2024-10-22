import React from 'react';
import { Zap, Users, Building } from 'lucide-react';

const features = [
  {
    icon: <Zap size={32} className="text-blue-400" />,
    title: 'Instant Transactions',
    description: 'Complete payments in seconds with our tap-and-pay technology.'
  },
  {
    icon: <Users size={32} className="text-blue-400" />,
    title: 'Peer-to-Peer Payments',
    description: 'Send money to friends instantly, split bills effortlessly.'
  },
  {
    icon: <Building size={32} className="text-blue-400" />,
    title: 'Business Accounts',
    description: 'Tailored solutions for venues with immediate settlements.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="container mx-auto py-12 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;