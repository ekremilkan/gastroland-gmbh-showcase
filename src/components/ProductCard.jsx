
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
        <h3 className="font-bold text-lg text-gastro-deep-blue mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{category.description}</p>
        <div className="flex flex-wrap mb-4">
          {category.certifications.map((cert, index) => (
            <span 
              key={index}
              className="inline-block bg-gastro-blue/10 text-gastro-dark-blue text-xs px-2 py-1 rounded-full mr-2 mb-2"
            >
              {cert}
            </span>
          ))}
        </div>
        <Link 
          to={`/products/${category.id}`}
          className="btn-primary inline-block w-full text-center"
        >
          Detaylar
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
