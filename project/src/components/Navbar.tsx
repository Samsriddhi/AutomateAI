import React from 'react';
import { Bot, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-white text-xl font-bold">Automate AI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">About</a>
              <button 
                onClick={onContactClick}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="text-gray-300 hover:text-white block px-3 py-2">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <button 
              onClick={onContactClick}
              className="text-gray-300 hover:text-white block w-full text-left px-3 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}