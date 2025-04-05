
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductSearchSection from '../components/ProductSearchSection';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Extract search query from URL if present
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    setSearchQuery(query);
  }, [location.search]);

  return (
    <div>
      <Hero />
      {/* Search bar moved up to be immediately visible */}
      <ProductSearchSection initialQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gastro-navy">
            Warum Uns Wählen?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gastro-light-yellow p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Qualitätsgarantie</h3>
              <p className="text-gray-600">Wir bieten sorgfältig ausgewählte Produkte, die den höchsten Qualitätsstandards entsprechen.</p>
            </div>
            
            <div className="bg-gastro-light-yellow p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Schnelle Lieferung</h3>
              <p className="text-gray-600">Unser pünktlicher und zuverlässiger Lieferservice sorgt dafür, dass Ihr Betrieb ohne Unterbrechungen läuft.</p>
            </div>
            
            <div className="bg-gastro-light-yellow p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Große Produktauswahl</h3>
              <p className="text-gray-600">Umfassendes Produktsortiment, mit dem Sie alle Ihre Bedürfnisse bei einem einzigen Lieferanten erfüllen können.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Fixed colors for better visibility */}
      <section className="py-16 bg-gastro-navy text-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Was Unsere Kunden Sagen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AB</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Ali Bey</h4>
                  <p className="text-sm text-white/80">Restaurant Anadolu</p>
                </div>
              </div>
              <p className="italic text-white">"Wir arbeiten seit Jahren mit Main Gastroland und sie haben uns nie enttäuscht. Die Qualität der Produkte und die schnelle Lieferung sind für unseren Betrieb sehr wertvoll."</p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MH</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Mehmet Hanım</h4>
                  <p className="text-sm text-white/80">Cafe Istanbul</p>
                </div>
              </div>
              <p className="italic text-white">"Für unser kleines Café alle Materialien an einem Ort zu finden, ist eine große Erleichterung. Das Team von Main Gastroland ist immer hilfsbereit und professionell."</p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Stefan Kunze</h4>
                  <p className="text-sm text-white/80">Mediterran Kitchen</p>
                </div>
              </div>
              <p className="italic text-white">"Es kann schwierig sein, einen zuverlässigen Lieferanten für hochwertige türkische und mediterrane Produkte zu finden, aber Main Gastroland bietet alles, was wir brauchen. Absolut empfehlenswert."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
