
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { searchProducts } from '../data/products';

const ProductGrid = ({ searchQuery = '' }) => {
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    const results = searchProducts(searchQuery);
    setFilteredCategories(results);
  }, [searchQuery]);

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
              onClick={() => window.location.href = '/'}
            >
              Alle Produkte anzeigen
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
