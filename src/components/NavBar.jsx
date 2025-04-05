
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search - in a real app we would redirect to search results
    window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
              alt="Main Gastroland GmbH Logo" 
              className="h-12 mr-3"
            />
            <span className="text-2xl font-bold text-gastro-navy hidden md:block">Main Gastroland GmbH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gastro-navy hover:text-gastro-orange transition-colors">
              Startseite
            </Link>
            <div className="relative group">
              <button className="text-gastro-navy hover:text-gastro-orange transition-colors cursor-pointer">
                Produkte
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/#products" className="block px-4 py-2 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy">
                    Alle Produkte
                  </Link>
                  <Link to="/products/1" className="block px-4 py-2 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy">
                    Fleischprodukte
                  </Link>
                  <Link to="/products/2" className="block px-4 py-2 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy">
                    Milchprodukte
                  </Link>
                  <Link to="/products/3" className="block px-4 py-2 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy">
                    Backwaren
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/faq" className="text-gastro-navy hover:text-gastro-orange transition-colors">
              FAQ
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Produkt suchen..."
                className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gastro-navy text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
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
            <form onSubmit={handleSearchSubmit} className="mb-4 px-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Produkt suchen..."
                  className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gastro-navy text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
            <Link
              to="/"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Startseite
            </Link>
            <Link
              to="/#products"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Produkte
            </Link>
            <Link
              to="/products/1"
              className="block px-4 py-2 ml-4 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Fleischprodukte
            </Link>
            <Link
              to="/products/2"
              className="block px-4 py-2 ml-4 text-sm text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              Milchprodukte
            </Link>
            <Link
              to="/faq"
              className="block px-4 py-2 text-gastro-navy hover:bg-gastro-yellow hover:text-gastro-navy"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
