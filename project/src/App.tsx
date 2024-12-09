import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContactModal from './components/ContactModal';
import { services } from './data/services';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Transform Your Business Communication
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Harness the power of AI to automate and enhance your customer interactions
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Communication?</h2>
          <p className="mb-6 text-blue-100">Get started today and see the difference AI can make.</p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;