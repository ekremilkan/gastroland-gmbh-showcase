
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { findAllProductCategories } from '../data/products';

const HomePage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Extract search query from URL if present
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    setSearchQuery(query);
    
    // Scroll to products section if there's a search query
    if (query) {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        setTimeout(() => {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.search]);

  return (
    <div>
      <Hero />
      <ProductSection initialQuery={searchQuery} />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gastro-deep-blue">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gastro-light p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-deep-blue">Kalite Garantisi</h3>
              <p className="text-gray-600">En yüksek kalite standartlarına uygun, özenle seçilmiş ürünler sunuyoruz.</p>
            </div>
            
            <div className="bg-gastro-light p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-deep-blue">Hızlı Teslimat</h3>
              <p className="text-gray-600">Zamanında ve güvenilir teslimat hizmetimizle işletmenizin aksamadan çalışmasını sağlıyoruz.</p>
            </div>
            
            <div className="bg-gastro-light p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gastro-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gastro-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gastro-deep-blue">Geniş Ürün Yelpazesi</h3>
              <p className="text-gray-600">Tek bir tedarikçiden tüm ihtiyaçlarınızı karşılayabileceğiniz kapsamlı bir ürün çeşitliliği.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gastro-dark-blue text-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Müşterilerimiz Ne Diyor?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AB</span>
                </div>
                <div>
                  <h4 className="font-bold">Ali Bey</h4>
                  <p className="text-sm opacity-80">Restaurant Anadolu</p>
                </div>
              </div>
              <p className="italic">"Yıllardır Main Gastroland ile çalışıyoruz ve bizi hiç hayal kırıklığına uğratmadılar. Ürünlerin kalitesi ve teslimat hızı işletmemiz için çok değerli."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MH</span>
                </div>
                <div>
                  <h4 className="font-bold">Mehmet Hanım</h4>
                  <p className="text-sm opacity-80">Cafe Istanbul</p>
                </div>
              </div>
              <p className="italic">"Küçük kafemiz için aradığımız tüm malzemeleri tek bir yerden temin edebilmek büyük kolaylık. Main Gastroland ekibi her zaman yardımcı ve profesyonel."</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gastro-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SK</span>
                </div>
                <div>
                  <h4 className="font-bold">Stefan Kunze</h4>
                  <p className="text-sm opacity-80">Mediterran Kitchen</p>
                </div>
              </div>
              <p className="italic">"Kaliteli Türk ve Akdeniz ürünleri için güvenilir bir tedarikçi bulmak zor olabilir, ancak Main Gastroland ihtiyacımız olan her şeyi sunuyor. Kesinlikle tavsiye ederim."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
