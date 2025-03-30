
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Circle, CheckCircle2, Layers, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  features,
  className
}) => {
  return (
    <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
      <CardHeader className="pb-2">
        <div className="rounded-full bg-engineering-100 p-2 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-engineering-600" />
        </div>
        <CardTitle className="text-xl font-bold text-engineering-800">{title}</CardTitle>
        <CardDescription className="text-metal-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-engineering-600 mt-0.5 flex-shrink-0" />
              <span className="text-metal-800">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Shaper Cutter Resharpening",
      description: "Precision resharpening for all types of shaper cutters",
      icon: Circle,
      features: [
        "High precision grinding process",
        "Geometry restoration",
        "Surface finish optimization",
        "Extended tool life"
      ]
    },
    {
      title: "HSS Hob Resharpening",
      description: "Expert resharpening of High-Speed Steel Hobs",
      icon: Layers,
      features: [
        "Face and tip resharpening",
        "Tooth profile restoration",
        "Cutting edge optimization",
        "Complete inspection"
      ]
    },
    {
      title: "Solid Carbide Hob Resharpening",
      description: "Specialized resharpening for carbide tools",
      icon: Shield,
      features: [
        "Diamond grinding technology",
        "Custom geometries",
        "Micron-level precision",
        "Performance enhancement"
      ]
    },
    {
      title: "Advanced Tool Coating",
      description: "Premium coating services for extended tool life",
      icon: CheckCircle2,
      features: [
        "PVD/CVD coating options",
        "Multi-layer coatings",
        "Wear resistance enhancement",
        "Custom coating solutions"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Specialized Services</h2>
          <p className="section-text">
            We provide premium resharpening services with the highest precision standards in the industry, 
            ensuring your tools perform with optimal efficiency and extended lifespan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-engineering-800 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Looking for customized solutions?</h3>
              <p className="text-engineering-100">
                We offer tailored resharpening services for specific requirements and specialized tools.
              </p>
            </div>
            <button className="bg-white text-engineering-800 font-bold py-3 px-6 rounded-lg hover:bg-engineering-100 transition-colors">
              Request A Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
