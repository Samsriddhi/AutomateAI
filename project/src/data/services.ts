import { MessageSquare, Phone, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
  videoUrl: string;
}

export const services: Service[] = [
  {
    title: "AI Chatbots",
    description: "Intelligent chatbots that understand context and provide human-like responses. Perfect for 24/7 customer support and engagement.",
    Icon: MessageSquare,
    videoUrl: "https://www.youtube.com/embed/D5VN56jQMWM" // OpenAI GPT-3 Demo
  },
  {
    title: "Voice Bots",
    description: "Natural-sounding voice assistants that can handle complex conversations and integrate seamlessly with your existing systems.",
    Icon: Bot,
    videoUrl: "https://www.youtube.com/embed/D5VN56jQMWM" // Google Duplex Demo
  },
  {
    title: "AI Call Management",
    description: "Advanced call routing and handling system powered by AI to ensure efficient communication and reduced wait times.",
    Icon: Phone,
    videoUrl: "https://www.youtube.com/embed/D5VN56jQMWM" // AI Call Center Demo
  }
];