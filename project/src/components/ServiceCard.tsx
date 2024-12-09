import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  videoUrl: string;
}

export default function ServiceCard({ title, description, Icon, videoUrl }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-blue-500" />
        <h3 className="text-xl font-bold text-white ml-2">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}