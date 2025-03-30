
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-text">
            Reach out to discuss your resharpening needs or request a quote for our premium services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-engineering-800 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-metal-700">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-metal-700">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-metal-700">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-metal-700">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-metal-700">
                    Service Required
                  </label>
                  <select 
                    id="service" 
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-metal-900 focus:outline-none focus:ring-2 focus:ring-engineering-600 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="shaper">Shaper Cutter Resharpening</option>
                    <option value="hss">HSS Hob Resharpening</option>
                    <option value="carbide">Solid Carbide Hob Resharpening</option>
                    <option value="coating">Tool Coating</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-metal-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your requirements in detail" 
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-engineering-600 hover:bg-engineering-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-engineering-800 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <p className="font-medium text-metal-800">Phone</p>
                      <p className="text-metal-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <p className="font-medium text-metal-800">Email</p>
                      <p className="text-metal-600">info@mulikhtech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <p className="font-medium text-metal-800">Address</p>
                      <p className="text-metal-600">
                        123 Engineering Street, Industrial Area,
                        <br />
                        Pune, Maharashtra - 411001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-engineering-600 mt-1" />
                    <div>
                      <p className="font-medium text-metal-800">Business Hours</p>
                      <p className="text-metal-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-engineering-800 mb-4">Quick Quote</h3>
                <p className="text-metal-700 mb-4">
                  Need an urgent quote for your resharpening needs?
                </p>
                <Button variant="outline" className="w-full border-engineering-600 text-engineering-600 hover:bg-engineering-50">
                  Request Express Quote
                </Button>
              </CardContent>
            </Card>
            
            <div className="bg-engineering-800 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Need Emergency Service?</h3>
              <p className="text-engineering-100 mb-4">
                We understand the cost of downtime. Contact our priority service team.
              </p>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-bold">+91 99999 88888</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
