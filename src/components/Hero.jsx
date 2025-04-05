
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-gastro-deep-blue via-gastro-dark-blue to-gastro-blue text-white py-20 md:py-32">
      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Main Gastroland GmbH
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
            Restoranlar ve gıda işletmeleri için en kaliteli toptan ürünleri özenle seçiyor ve sunuyoruz. 
            Profesyonel mutfakların vazgeçilmez tedarikçisi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToProducts} className="btn-primary">
              Ürünlerimizi Keşfedin
            </button>
            <a href="#" className="btn-outline">
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToProducts} className="text-white p-2">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
    </div>
  );
};

export default Hero;
