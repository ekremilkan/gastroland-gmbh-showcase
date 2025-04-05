
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductDetailCard from '../components/ProductDetailCard';
import { findProductCategory } from '../data/products';

const ProductCategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API request
    const fetchCategory = async () => {
      setLoading(true);
      const data = findProductCategory(parseInt(categoryId));
      setCategory(data);
      setLoading(false);
    };
    
    fetchCategory();
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [categoryId]);
  
  if (loading) {
    return (
      <div className="container-custom mx-auto py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-amber-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-amber-100 rounded w-2/3 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-white rounded-lg shadow-sm p-4">
                <div className="h-40 bg-amber-50 rounded mb-4"></div>
                <div className="h-6 bg-amber-50 rounded mb-3"></div>
                <div className="h-4 bg-amber-50 rounded w-2/3 mb-3"></div>
                <div className="h-4 bg-amber-50 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!category) {
    return (
      <div className="container-custom mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produktkategorie nicht gefunden</h2>
        <Link to="/" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Header Area */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-12">
        <div className="container-custom mx-auto">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-amber-200 transition-colors">
            <ChevronLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg max-w-3xl">{category.description}</p>
          
          {/* Certification Badges */}
          <div className="flex flex-wrap mt-6">
            {category.certifications.map((cert, index) => (
              <span 
                key={index}
                className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-800">Produktinformationen</h2>
          <p className="text-gray-600 mb-6">
            Bei Main Gastroland sorgen wir dafür, dass alle unsere Produkte den höchsten Qualitätsstandards entsprechen. 
            Wir wählen unsere Lieferanten sorgfältig aus und führen regelmäßige Qualitätskontrollen durch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-md p-4">
              <h3 className="font-bold text-lg mb-2 text-amber-700">Qualitätsgarantie</h3>
              <p className="text-gray-600 text-sm">
                Alle unsere Produkte werden gemäß den Lebensmittelsicherheitsstandards gelagert und transportiert. 
                Jedes Produkt wird sorgfältig ausgewählt, um die Bedürfnisse professioneller Küchen zu erfüllen.
              </p>
            </div>
            
            <div className="border border-gray-100 rounded-md p-4">
              <h3 className="font-bold text-lg mb-2 text-amber-700">Bestellung und Lieferung</h3>
              <p className="text-gray-600 text-sm">
                Bitte kontaktieren Sie uns für Großbestellungen. Wir bieten Same-Day-Lieferung für Berlin und Umgebung an.
                Für andere Regionen sorgen wir mit unseren Partnerspeditionen für die schnellste Lieferung.
              </p>
            </div>
          </div>
          
          {/* Certification Information */}
          <div className="mt-8 bg-amber-50 p-6 rounded-md">
            <h3 className="font-bold text-lg mb-4 text-amber-700">Unsere Zertifikate</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800">ISO 22000</h4>
                  <p className="text-xs text-gray-500">Lebensmittelsicherheits-Managementsystem</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800">HACCP</h4>
                  <p className="text-xs text-gray-500">Gefahrenanalyse und kritische Kontrollpunkte</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800">Bio-Zertifikat</h4>
                  <p className="text-xs text-gray-500">Gilt für bestimmte Produkte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
