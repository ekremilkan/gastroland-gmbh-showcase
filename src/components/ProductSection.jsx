
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
    <section id="products" className="py-16 bg-gray-50">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gastro-deep-blue">
          Ürünlerimiz
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Toptan gıda tedarikinde profesyonel çözüm ortağınız. Geniş ürün yelpazemizle restoranlarınız için en kaliteli malzemeler burada.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Ürün kategorisi veya ürün adı ara..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gastro-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gastro-dark-blue text-white px-6 py-3 rounded-r-lg hover:bg-gastro-deep-blue transition-colors"
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
            <p className="text-xl text-gray-600">Aradığınız ürün bulunamadı.</p>
            <button 
              className="mt-4 text-gastro-dark-blue hover:text-gastro-deep-blue font-medium"
              onClick={() => setSearchQuery('')}
            >
              Tüm ürünleri göster
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
