import React from 'react';
import { Activity, Phone, Mail, MapPin } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Xpert i
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Enterprises</p>
            </div>
          </button>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="tel:+15551234567" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@xperti.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>info@xperti.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>Medical District, NY</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;