import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/hooks/useTheme';

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L8</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">LIV8</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                <span>Who We Help</span>
                <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#entrepreneurs" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">Entrepreneurs</a>
                <a href="#homeowners" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Homeowners</a>
                <a href="#businesses" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Businesses</a>
                <a href="#self-employed" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg">Self-Employed</a>
              </div>
            </div>
            <div className="relative group">
              <Link 
                href="/services" 
                className={`flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors ${isActive('/services') ? 'text-primary' : ''}`}
              >
                <span>Services</span>
                <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#digital-ai" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">Digital & AI</a>
                <a href="#funding" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Funding & Credit</a>
                <a href="#insurance" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Insurance & Wealth</a>
                <a href="#health" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Health & Supplements</a>
                <a href="#solar" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Solar & Energy</a>
                <a href="#events" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg">Events/Logistics</a>
              </div>
            </div>
            <div className="relative group">
              <Link 
                href="/divisions" 
                className={`flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors ${isActive('/divisions') ? 'text-primary' : ''}`}
              >
                <span>Divisions</span>
                <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform"></i>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#liv8-ai" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">LIV8 AI</a>
                <a href="#liv8-capital" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">LIV8 Capital</a>
                <a href="#liv8-health" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">LIV8 Health</a>
                <a href="#liv8-homes" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg">LIV8 Homes</a>
              </div>
            </div>
            <Link 
              href="/join" 
              className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors ${isActive('/join') ? 'text-primary' : ''}`}
            >
              Join LIV8
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:813-441-9686" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              <i className="fas fa-phone"></i>
              <span className="font-medium">813-441-9686</span>
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-${theme === 'light' ? 'blue-400' : 'yellow-500'}`}></i>
            </button>
            <button 
              onClick={onBookingClick}
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2">
            <i className="fas fa-bars text-gray-700 dark:text-gray-300"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">L8</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">LIV8</span>
          </div>
          <button onClick={toggleMobileMenu} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <i className="fas fa-times text-gray-900 dark:text-white text-lg"></i>
          </button>
        </div>
        <div className="p-6 space-y-6 bg-white dark:bg-gray-900 h-full overflow-y-auto">
          <Link href="/" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-home mr-3 text-primary"></i>
            Home
          </Link>
          <Link href="/services" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-concierge-bell mr-3 text-primary"></i>
            Services
          </Link>
          <Link href="/divisions" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-building mr-3 text-primary"></i>
            Divisions
          </Link>
          <Link href="/join" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-handshake mr-3 text-primary"></i>
            Join LIV8
          </Link>
          <Link href="/contact" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-envelope mr-3 text-primary"></i>
            Contact
          </Link>
          <a href="tel:813-441-9686" className="block py-3 text-lg font-medium text-primary border-b border-gray-100 dark:border-gray-800">
            <i className="fas fa-phone mr-3"></i>
            813-441-9686
          </a>
          <div className="pt-4">
            <button 
              onClick={() => { onBookingClick(); toggleMobileMenu(); }}
              className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white py-4 rounded-lg font-medium text-lg transition-all duration-300"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
