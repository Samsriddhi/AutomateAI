import React from 'react';
import { Brain, Cpu, Lock, Zap } from 'lucide-react';

interface TechFeatureProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const TechFeature = ({ Icon, title, description }: TechFeatureProps) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-blue-500" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function AboutSection() {
  const features = [
    {
      Icon: Brain,
      title: "Advanced Neural Networks",
      description: "Utilizing state-of-the-art deep learning models for natural language understanding and generation."
    },
    {
      Icon: Cpu,
      title: "Edge Computing",
      description: "Deploying AI solutions at the edge for faster response times and enhanced privacy."
    },
    {
      Icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your sensitive data."
    },
    {
      Icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast response times with our distributed processing architecture."
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Cutting-Edge AI Solutions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We combine the latest advancements in artificial intelligence with robust infrastructure 
          to deliver enterprise-grade automation solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature) => (
          <TechFeature key={feature.title} {...feature} />
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["GPT-4", "BERT", "Transformer XL", "PyTorch", "TensorFlow", "Kubernetes", "Docker", "AWS"].map((tech) => (
            <div key={tech} className="bg-black/30 rounded-lg p-3">
              <span className="text-blue-400">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}