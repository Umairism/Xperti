import React from 'react';
import { Home, Info, Package, Wrench, Briefcase, MessageSquare, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'spareparts', label: 'Spare Parts', icon: Wrench },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-600 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-1 overflow-x-auto py-3">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                currentPage === id
                  ? 'bg-white text-blue-600 shadow-md transform scale-105'
                  : 'text-white hover:bg-white/20 hover:scale-105'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;