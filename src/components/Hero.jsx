
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-gastro-orange to-gastro-yellow text-gastro-navy py-20 md:py-32">
      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
              alt="Main Gastroland GmbH Logo" 
              className="w-48 md:w-64 mx-auto"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left md:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-gastro-navy">
              Main Gastroland GmbH
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up text-gastro-navy">
              Wir wählen und liefern sorgfältig die hochwertigsten Großhandelsprodukte für Restaurants und Lebensmittelbetriebe. 
              Der unverzichtbare Lieferant für professionelle Küchen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={scrollToProducts} className="bg-gastro-navy hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                Entdecken Sie unsere Produkte
              </button>
              <a href="#" className="border-2 border-gastro-navy text-gastro-navy hover:bg-gastro-navy hover:text-white px-6 py-3 rounded-lg transition-colors duration-300">
                Kontaktieren Sie uns
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToProducts} className="text-gastro-navy p-2">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
    </div>
  );
};

export default Hero;
