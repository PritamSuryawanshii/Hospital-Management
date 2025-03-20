
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 page-transition py-4',
        isScrolled ? 'glass shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-hospital-700 font-medium text-xl tracking-tight">
              PatientConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                'text-sm font-medium transition-colors',
                isActive('/')
                  ? 'text-hospital-700'
                  : 'text-hospital-600 hover:text-hospital-700'
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                'text-sm font-medium transition-colors',
                isActive('/about')
                  ? 'text-hospital-700'
                  : 'text-hospital-600 hover:text-hospital-700'
              )}
            >
              About
            </Link>
            <Link
              to="/services"
              className={cn(
                'text-sm font-medium transition-colors',
                isActive('/services')
                  ? 'text-hospital-700'
                  : 'text-hospital-600 hover:text-hospital-700'
              )}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={cn(
                'text-sm font-medium transition-colors',
                isActive('/contact')
                  ? 'text-hospital-700'
                  : 'text-hospital-600 hover:text-hospital-700'
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-hospital-700 hover:text-hospital-800 hover:bg-hospital-50">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-hospital-600 hover:bg-hospital-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-hospital-700" />
            ) : (
              <Menu className="w-6 h-6 text-hospital-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 md:hidden transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <Link
            to="/"
            className={cn(
              'text-lg font-medium transition-colors',
              isActive('/') ? 'text-hospital-700' : 'text-hospital-600'
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              'text-lg font-medium transition-colors',
              isActive('/about') ? 'text-hospital-700' : 'text-hospital-600'
            )}
          >
            About
          </Link>
          <Link
            to="/services"
            className={cn(
              'text-lg font-medium transition-colors',
              isActive('/services') ? 'text-hospital-700' : 'text-hospital-600'
            )}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={cn(
              'text-lg font-medium transition-colors',
              isActive('/contact') ? 'text-hospital-700' : 'text-hospital-600'
            )}
          >
            Contact
          </Link>
          <div className="pt-6 w-full flex flex-col space-y-3">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full bg-hospital-600 hover:bg-hospital-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
