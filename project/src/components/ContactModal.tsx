import React from 'react';
import { Mail, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-blue-500/10 rounded-full mb-4">
            <Mail className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-400">
            Ready to transform your business with AI? Contact our team of experts.
          </p>
        </div>

        <div className="bg-black/30 p-4 rounded-lg text-center">
          <p className="text-lg font-semibold text-blue-400">automateai2025@gmail.com</p>
          <p className="text-sm text-gray-400 mt-2">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}