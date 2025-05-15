
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-medical-500 rounded-md">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="hidden text-xl font-bold text-medical-700 md:inline-block">HealthReach</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className="text-gray-700 hover:text-medical-600">Home</Link>
          <Link to="/hospitals" className="text-gray-700 hover:text-medical-600">Find Hospitals</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-medical-600">Doctors</Link>
          <Link to="/medicines" className="text-gray-700 hover:text-medical-600">Medicines</Link>
          <Link to="/schemes" className="text-gray-700 hover:text-medical-600">Gov. Schemes</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Bell className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container py-3 px-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-3 text-gray-700 hover:bg-medical-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hospitals" 
              className="block py-2 px-3 text-gray-700 hover:bg-medical-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Hospitals
            </Link>
            <Link 
              to="/doctors" 
              className="block py-2 px-3 text-gray-700 hover:bg-medical-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link 
              to="/medicines" 
              className="block py-2 px-3 text-gray-700 hover:bg-medical-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Medicines
            </Link>
            <Link 
              to="/schemes" 
              className="block py-2 px-3 text-gray-700 hover:bg-medical-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gov. Schemes
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
