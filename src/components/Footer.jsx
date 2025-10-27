import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Bella Vita Ristorante
            </h3>
            <p className="text-gray-300 mb-4">
              Authentic Italian Cuisine in the Heart of Detroit. Family-owned since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-primary transition">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  456 Woodward Ave<br />
                  Detroit, MI 48226
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="tel:3135558482" className="text-gray-300 hover:text-primary transition">
                  (313) 555-VITA (8482)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0" />
                <a href="mailto:reservations@bellavita.com" className="text-gray-300 hover:text-primary transition">
                  reservations@bellavita.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start space-x-3">
              <ClockIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <ul className="text-gray-300 space-y-1">
                <li>Mon-Thu: 11AM - 10PM</li>
                <li>Fri-Sat: 11AM - 11PM</li>
                <li>Sunday: 12PM - 9PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bella Vita Ristorante. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Established 1995 | Detroit, Michigan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
