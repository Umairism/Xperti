import React from 'react';
import { Activity, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Medical Equipment', action: () => setCurrentPage('products') },
        { name: 'Ultrasound Systems', action: () => setCurrentPage('products') },
        { name: 'Diagnostic Equipment', action: () => setCurrentPage('products') },
        { name: 'Digital Radiography', action: () => setCurrentPage('products') }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Equipment Sales', action: () => setCurrentPage('products') },
        { name: 'Maintenance & Repair', action: () => setCurrentPage('spareparts') },
        { name: 'Installation Services', action: () => setCurrentPage('spareparts') },
        { name: 'Technical Support', action: () => setCurrentPage('contact') }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', action: () => setCurrentPage('about') },
        { name: 'Our Projects', action: () => setCurrentPage('projects') },
        { name: 'Customer Feedback', action: () => setCurrentPage('feedback') },
        { name: 'Contact Us', action: () => setCurrentPage('contact') }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', action: () => setCurrentPage('contact') },
        { name: 'Spare Parts', action: () => setCurrentPage('spareparts') },
        { name: 'Documentation', href: '/docs' },
        { name: 'Warranty Info', href: '/warranty' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/xperti', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/xperti', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/xperti', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/xperti', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Xpert i
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Enterprises</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in advanced medical equipment solutions. 
              Serving healthcare facilities worldwide with excellence and innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <a href="tel:+15551234567" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <a href="mailto:info@xperti.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  info@xperti.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <p className="text-white font-semibold">Medical District, NY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Xpert i Enterprises. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Accessibility
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              ISO 13485 Certified | FDA Registered
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;