
import { useState } from 'react';
import { Search } from 'lucide-react';

const ProductSearchSection = ({ initialQuery = '', setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(initialQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
  };

  return (
    <section className="py-10 bg-gastro-light-yellow">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gastro-navy">
            Unsere Produkte Durchsuchen
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Produktkategorie oder Produktname suchen..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gastro-navy text-white px-6 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductSearchSection;
