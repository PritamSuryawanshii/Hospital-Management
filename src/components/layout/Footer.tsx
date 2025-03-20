
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hospital-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-hospital-900">PatientConnect</h3>
            <p className="text-sm text-hospital-700 max-w-xs">
              Streamlining healthcare management for patients and providers alike.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-hospital-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-hospital-900 mb-4">Patients</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Patient Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-hospital-600 hover:text-hospital-800 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-hospital-900 mb-4">Contact</h4>
            <address className="not-italic text-sm text-hospital-600 space-y-2">
              <p>123 Medical Center Dr.</p>
              <p>Healthville, CA 90210</p>
              <p className="pt-2"><a href="mailto:info@patientconnect.com" className="hover:text-hospital-800 transition-colors">info@patientconnect.com</a></p>
              <p><a href="tel:+1-555-123-4567" className="hover:text-hospital-800 transition-colors">+1 (555) 123-4567</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-hospital-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-hospital-600">
              &copy; {new Date().getFullYear()} PatientConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-xs text-hospital-600 hover:text-hospital-800 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-hospital-600 hover:text-hospital-800 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-xs text-hospital-600 hover:text-hospital-800 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
