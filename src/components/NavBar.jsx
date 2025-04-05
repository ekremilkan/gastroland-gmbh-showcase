
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-6">
          {/* Logo - Made bigger */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
              alt="Main Gastroland GmbH Logo" 
              className="h-16 mr-3"
            />
            <span className="text-2xl font-bold text-gastro-navy hidden md:block">Main Gastroland GmbH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gastro-navy hover:text-gastro-orange transition-colors text-lg">
              Startseite
            </Link>
            <Link to="/about" className="text-gastro-navy hover:text-gastro-orange transition-colors text-lg">
              Über Uns
            </Link>
            <Link to="/contact" className="text-gastro-navy hover:text-gastro-orange transition-colors text-lg">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gastro-navy"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white">
            <Link
              to="/"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Startseite
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Über Uns
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
