
import { useState } from 'react';

const ProductDetailCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-4 aspect-h-3 h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gastro-deep-blue">{product.name}</h3>
        <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <button className="text-gastro-dark-blue font-medium hover:text-gastro-deep-blue transition-colors">
              Detaylar
            </button>
            <div className="text-sm text-gray-500">
              Toptan Satış
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
