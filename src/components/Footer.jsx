
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gastro-deep-blue text-white pt-12 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Main Gastroland GmbH</h3>
            <p className="mb-4">Restoran ve yiyecek işletmelerine özel toptan gıda tedarikçisi.</p>
            <div className="flex items-start mb-2">
              <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Musterstraße 123, 12345 Berlin, Almanya</p>
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
              <p>Pazartesi - Cuma: 08:00 - 17:00<br />Cumartesi: 09:00 - 13:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gastro-blue transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-gastro-blue transition-colors">Ürünlerimiz</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gastro-blue transition-colors">SSS</Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-gastro-blue transition-colors">Impressum</Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-gastro-blue transition-colors">Gizlilik Politikası</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-gastro-blue transition-colors">Şartlar ve Koşullar</Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-gastro-blue transition-colors">Impressum</Link>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Konum</h3>
            <div className="w-full h-48 bg-gastro-light rounded-lg overflow-hidden">
              {/* Placeholder Map - in a real project we would use Google Maps or similar */}
              <div className="w-full h-full flex items-center justify-center bg-gastro-blue/50">
                <p className="text-center px-4">
                  <MapPin size={24} className="inline-block mb-2" />
                  <br />
                  Buraya gerçek bir harita yerleştirilecek
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gastro-blue/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Main Gastroland GmbH. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
