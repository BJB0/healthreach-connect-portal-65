
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">HealthReach</h3>
            <p className="text-gray-600 text-sm">
              Bridging the healthcare accessibility gap for rural and semi-urban residents.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hospitals" className="text-gray-600 hover:text-medical-600">Find Hospitals</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-medical-600">Find Doctors</Link>
              </li>
              <li>
                <Link to="/medicines" className="text-gray-600 hover:text-medical-600">Check Medicines</Link>
              </li>
              <li>
                <Link to="/schemes" className="text-gray-600 hover:text-medical-600">Government Schemes</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-medical-600">FAQs</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-600 hover:text-medical-600">Submit Feedback</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-medical-600">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-medical-600">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Emergency Contact</h3>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2 text-emergency-600" />
              <span className="text-emergency-600 font-semibold">102 / 108</span>
            </div>
            <p className="text-xs text-gray-500">
              For medical emergencies only. Available 24x7.
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} HealthReach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
