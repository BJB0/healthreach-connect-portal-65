
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-medical-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-medical-500 hover:bg-medical-600">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
