
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gastro-navy text-white pt-12 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
                alt="Main Gastroland GmbH Logo" 
                className="h-16 mr-2"
              />
              <h3 className="text-xl font-bold">Main Gastroland</h3>
            </div>
            <p className="mb-4">Großhandelslieferant für Restaurants und Lebensmittelbetriebe.</p>
            <div className="flex items-start mb-2">
              <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Musterstraße 123, 12345 Berlin, Deutschland</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 flex-shrink-0" size={18} />
              <p>+49 123 456789</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 flex-shrink-0" size={18} />
              <p>info@main-gastroland.de</p>
            </div>
            <div className="flex items-start mb-2">
              <Clock className="mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Montag - Freitag: 08:00 - 17:00<br />Samstag: 09:00 - 13:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gastro-yellow transition-colors">Startseite</Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-gastro-yellow transition-colors">Unsere Produkte</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gastro-yellow transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-gastro-yellow transition-colors">Impressum</Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-gastro-yellow transition-colors">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-gastro-yellow transition-colors">AGB</Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-gastro-yellow transition-colors">Impressum</Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Standort</h3>
            <div className="w-full h-48 bg-white/10 rounded-lg overflow-hidden">
              {/* Placeholder Map - in a real project we would use Google Maps or similar */}
              <div className="w-full h-full flex items-center justify-center bg-white/5">
                <p className="text-center px-4">
                  <MapPin size={24} className="inline-block mb-2" />
                  <br />
                  Hier wird eine echte Karte angezeigt
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-sm">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
              alt="Main Gastroland GmbH Logo" 
              className="h-8 mr-2"
            />
            <p>&copy; {new Date().getFullYear()} Main Gastroland GmbH. Alle Rechte vorbehalten.</p>
          </div>
          <p className="mt-2 text-xs text-white/70">ALLES RUND UM DEN GASTROBEDARF</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
