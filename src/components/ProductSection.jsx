
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { searchProducts } from '../data/products';

const ProductSection = ({ initialQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const results = searchProducts(searchQuery);
    setFilteredCategories(results);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = searchProducts(searchQuery);
    setFilteredCategories(results);
  };

  return (
    <section id="products" className="py-16 bg-gastro-light-yellow">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
            alt="Main Gastroland GmbH Logo" 
            className="h-12 mr-3"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gastro-navy">
            Unsere Produkte
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Ihr professioneller Partner für Großhandelslebensmittelversorgung. Unser breites Produktsortiment bietet die besten Zutaten für Ihre Restaurants.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Produktkategorie oder Produktname suchen..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gastro-navy text-white px-6 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Kein Produkt gefunden.</p>
            <button 
              className="mt-4 text-gastro-orange hover:text-gastro-navy font-medium"
              onClick={() => setSearchQuery('')}
            >
              Alle Produkte anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
