
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Services', href: '#services' },
    { title: 'Equipment', href: '#equipment' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo size="md" />
          <div>
            <h1 className="font-bold text-xl text-engineering-800 leading-tight">MULIK HTECH</h1>
            <p className="text-xs text-metal-700 leading-tight">TOOLING AND ENGINEERING</p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a 
              key={link.title}
              href={link.href}
              className="text-metal-800 hover:text-engineering-600 font-medium transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Button variant="default" className="bg-engineering-600 hover:bg-engineering-700">
            Get Quote
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.title}
                href={link.href}
                className="text-metal-800 hover:text-engineering-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-engineering-600 hover:bg-engineering-700 w-full"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
