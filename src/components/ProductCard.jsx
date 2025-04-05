
import { Link } from 'react-router-dom';

const ProductCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 relative h-48">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gastro-navy mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{category.description}</p>
        <div className="flex flex-wrap mb-4">
          {category.certifications.map((cert, index) => (
            <span 
              key={index}
              className="inline-block bg-gastro-yellow/30 text-gastro-navy text-xs px-2 py-1 rounded-full mr-2 mb-2"
            >
              {cert}
            </span>
          ))}
        </div>
        <Link 
          to={`/products/${category.id}`}
          className="bg-gradient-to-r from-gastro-orange to-gastro-yellow hover:from-gastro-yellow hover:to-gastro-orange text-gastro-navy font-medium px-6 py-3 rounded-lg transition-all duration-300 inline-block w-full text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
