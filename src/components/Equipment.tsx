
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckSquare, BarChart3 } from 'lucide-react';

const Equipment: React.FC = () => {
  return (
    <section id="equipment" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Advanced Equipment</h2>
          <p className="section-text">
            Our state-of-the-art machinery ensures the highest precision and quality in resharpening services, 
            maintaining A++ standards across all our processes.
          </p>
        </div>
        
        <Tabs defaultValue="machinery" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="machinery">Machinery</TabsTrigger>
            <TabsTrigger value="quality">Quality Control</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
          </TabsList>
          
          <TabsContent value="machinery" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-3 bg-engineering-100 text-engineering-800 hover:bg-engineering-200">Featured Equipment</Badge>
                <h3 className="text-2xl font-bold text-engineering-800 mb-4">Kapp AS305B Machine</h3>
                <p className="text-metal-700 mb-6">
                  Our Kapp AS305B precision grinding machine represents the pinnacle of hob resharpening technology. 
                  This advanced equipment allows us to achieve exceptional accuracy and surface finish quality.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">High Precision Grinding</h4>
                      <p className="text-metal-600">Capable of grinding with precision up to 0.001mm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">Advanced Control System</h4>
                      <p className="text-metal-600">Automated CNC controls for perfect repeatability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">Multi-Axis Capability</h4>
                      <p className="text-metal-600">5-axis movement for complex geometries and profiles</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/43a798c5-0c36-4097-83ac-dfc3e564aed4.png" 
                    alt="Kapp AS305B Machine" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 right-0 bg-engineering-600 text-white px-4 py-2 rounded-bl font-bold">
                    Kapp AS305B
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/10250cb6-785c-44d9-94a4-4bb55684d24f.png" 
                    alt="Kapp AS305B Cutting Process" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 bg-engineering-600 text-white px-4 py-2 rounded-tr font-bold">
                    Precision Cutting
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-engineering-800 mb-2">Grinding Equipment</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">CNC Grinding Centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Diamond Wheel Grinders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Profile Grinders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-engineering-800 mb-2">Coating Systems</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">PVD Coating Units</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">CVD Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Surface Treatment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-engineering-800 mb-2">Finishing Equipment</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Micro-Finishing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Edge Preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-engineering-600" />
                    <span className="text-metal-700">Polishing Systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="quality" className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-engineering-800 mb-4">Quality Control Systems</h3>
              <p className="text-metal-700 mb-6">
                Our comprehensive quality control systems ensure that every tool meets our strict A++ standards before delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">3D Measurement Systems</h4>
                      <p className="text-metal-600">High-precision coordinate measuring machines that verify dimensions to micron-level accuracy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">Profile Verification</h4>
                      <p className="text-metal-600">Advanced optical systems for validating complex tool profiles and geometries</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">Surface Analysis</h4>
                      <p className="text-metal-600">Surface roughness and integrity testing equipment for optimal cutting performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 text-engineering-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-metal-800">Material Hardness Testing</h4>
                      <p className="text-metal-600">Specialized equipment to verify material properties and heat treatment results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="Quality Control Equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="technology" className="space-y-6">
            <div className="bg-engineering-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-engineering-800 mb-4">Cutting-Edge Technology</h3>
              <p className="text-metal-700 mb-6">
                We continuously invest in the latest technology to maintain our position as industry leaders in tool resharpening.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="text-xl font-bold text-engineering-700 mb-3">Digital Workflow Management</h4>
                  <p className="text-metal-600 mb-4">
                    Our custom digital workflow system tracks each tool through the entire resharpening process, 
                    ensuring quality at every step and providing complete traceability.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-engineering-700 mb-3">Advanced CAD/CAM Integration</h4>
                  <p className="text-metal-600 mb-4">
                    Tool geometries are digitally optimized with sophisticated CAD/CAM software before 
                    the actual resharpening process begins.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-engineering-700 mb-3">Automated Inspection</h4>
                  <p className="text-metal-600 mb-4">
                    Computer vision systems automatically inspect tools post-process, detecting even 
                    the smallest deviations from specifications.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-engineering-700 mb-3">Industry 4.0 Integration</h4>
                  <p className="text-metal-600 mb-4">
                    Our facility implements Industry 4.0 principles with interconnected machines that 
                    communicate in real-time for optimal process control.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Equipment;
