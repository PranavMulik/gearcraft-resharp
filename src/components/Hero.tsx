
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute right-0 bottom-0 -mb-48 -mr-48">
          <Logo size="lg" className="w-96 h-96 text-engineering-800" />
        </div>
        <div className="absolute top-0 left-0 -ml-24 -mt-24">
          <Logo size="lg" className="w-72 h-72 text-engineering-800" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block highlight-badge mb-4">
              Premium Resharpening Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-800 leading-tight">
              Precision Engineering <br />
              <span className="text-engineering-600">Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-metal-700 max-w-xl">
              Specialized in precision resharpening of cutting tools with A++ quality standards and advanced technology.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-engineering-600 h-5 w-5" />
                <span className="text-metal-800 font-medium">Hob Resharpening Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-engineering-600 h-5 w-5" />
                <span className="text-metal-800 font-medium">State-of-the-art Quality Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-engineering-600 h-5 w-5" />
                <span className="text-metal-800 font-medium">Advanced Coating Solutions</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-engineering-600 hover:bg-engineering-700 text-white">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-engineering-600 text-engineering-600">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Precision Engineering" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-engineering-800/30 rounded-lg"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg flex items-center gap-3">
              <div className="rounded-full bg-engineering-50 p-2">
                <Award className="h-8 w-8 text-engineering-600" />
              </div>
              <div>
                <p className="font-bold text-metal-900">A++ Standards</p>
                <p className="text-sm text-metal-600">Industry Leading Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
