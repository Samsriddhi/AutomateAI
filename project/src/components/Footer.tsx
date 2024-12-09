import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/95 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Bot className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-white font-bold">Automate AI</span>
          </div>
          
          <div className="text-sm">
            <p>© {currentYear} Automate AI. All rights reserved.</p>
            <p>Transforming Business Communication Through AI</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white mr-4">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}